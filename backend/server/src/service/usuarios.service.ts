import { Injectable, NotAcceptableException } from '@nestjs/common';
import { ModulosPermissaoRepository } from 'src/repositories/modulos-permissao.repository';
import { SubModulosPermissaoRepository } from 'src/repositories/sub-modulos-permissao.repository';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { FirebaseService } from './firebase.service';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { SubModulosRepository } from 'src/repositories/sub-modulos.repository';
import { ModulosRepository } from 'src/repositories/modulos.repository';
import {
  ErroBadRequest,
  ErroNotAceptable,
  SucessAceptable,
} from 'src/utils/msg.response';
import { BcryptService as Jwt } from 'bcrypt-jwt-module';
import { randomUUID } from 'crypto';
import { getEmailTemplatePath } from '../helper/getEmailTemplatePath';
import { isBefore, subDays } from 'date-fns';

import { SendgridService } from 'src/mail/sendgrid/sendgrid.service';

const jwt = new Jwt();
@Injectable()
export class UsuariosService {
  constructor(
    private mailService: SendgridService,
    private usuarioRepositorio: UsuarioRepository,
    private modulosPermissaoRepository: ModulosPermissaoRepository,
    private subModulosPermissaoRepository: SubModulosPermissaoRepository,
    private firebaseService: FirebaseService,
    private configClienteRepository: ConfigClienteRepository,
    private subModulosRepository: SubModulosRepository,
    private modulosRepository: ModulosRepository,
  ) { }


  async forgotPassword(email) {

    const hasOldSolicitation = await this.usuarioRepositorio.resetPasswordFindUnique({
      where: { email },
    });

    if (hasOldSolicitation) {
      await this.usuarioRepositorio.deleteResetPassword({
        where: { email },
      });
    }

    const user = await this.usuarioRepositorio.findOne(email);

    if (!user) return {
      msg: 'Usuário Não Encontrado !!',
      status: false
    };

    if (!user.verifiedAt) {
      await this.sendWelcomeEmail(user);

      return {
        msg: 'Usuário Não Verificado, verifique seu Email! ',
        status: false
      };
    }

    const token = randomUUID();
    const expireIn = new Date();
    const linkVerification = `${process.env.FRONTEND_URL}/auth/recuperar-senha/${token}`;

    const subject = 'Recuperação de senha';
    expireIn.setDate(expireIn.getDate() + 1);

    const templatePath = getEmailTemplatePath('recover-password.hbs');

    const emailSent = await this.mailService.sendEmaiNodemailer({
      to: user.email,
      subject,
      variables: {
        name: user.nome,
        email: user.email,
        linkVerification,
      },
      path: templatePath,
    });

    if (emailSent) {
      await this.usuarioRepositorio.createResetPassword({
        data: {
          email: user.email,
          token,
          expireIn,
        },
      });
    }

    return {
      msg: 'Link para Alteração Enviado ao Email!',
      linkToLoginPage: `/login`,
      status: true
    };
  }
  async recoverPassword(password: string, token: string) {
    const recoverPassword = await this.usuarioRepositorio.resetPasswordFindUnique({
      where: {
        token,
      },
    });

    const user = await this.usuarioRepositorio.update({
      where: { email: recoverPassword.email },
      data: {
        password: await jwt.hash(password),
      },
    });

    const subject = 'Senha alterada com sucesso.';

    const templatePath = getEmailTemplatePath('recover-password-success.hbs');

    await this.mailService.sendEmail({
      to: user.email,
      subject,
      variables: {
        name: user.nome,
        linkToLoginPage: `${process.env.FRONTEND_URL}/auth/login`,
      },
      path: templatePath,
    });

    return true;
  }

  async sendWelcomeEmail(newUser) {
    const subject = 'Confirmação de e-mail';
    const code = randomUUID();
    const linkVerification = `${process.env.FRONTEND_URL}/validar-email/${code}`;

    const templatePath = getEmailTemplatePath('confirm-email.hbs');

    const emailSent = await this.mailService.sendEmaiNodemailer({
      to: newUser.email,
      subject,
      variables: {
        name: newUser.nome,
        email: newUser.email,
        linkVerification,
      },
      path: templatePath,
    });

    if (emailSent) {

      const emailVerification = await this.usuarioRepositorio.findVerificationCreate(newUser.email);

      if (!emailVerification) {
        await this.usuarioRepositorio.emailVerificationCreate({
          data: {
            email: newUser.email,
            code,
          },
        });

      } else {

        await this.usuarioRepositorio.deletVficationCreate(newUser.email);

        await this.usuarioRepositorio.emailVerificationCreate({
          data: {
            email: newUser.email,
            code,
          },
        });

      }

    }
    return emailSent;
  }

  async verifyTokenRecoverPassword(token: string) {
    const twoDaysAgo = subDays(new Date(), 2);

    const recoverPassword = await this.usuarioRepositorio.resetPasswordFindUnique({
      where: {
        token,
      },
    });

    if (!recoverPassword) return false;

    const expiredIn = new Date(recoverPassword.expireIn);
    const isOlderThanTwoDays = isBefore(expiredIn, twoDaysAgo);

    if (isOlderThanTwoDays) return false;

    return true;
  }

  //firebase
  async novaSenhaUsuarioEmail(email) {
    try {
      const usuario = await this.usuarioRepositorio.getByEmailUser(email);
      if (usuario) {

        return await this.firebaseService.sendPasswordResetEmail(email);
      }
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createUsuarioCliente(data: any) {
    try {    

      if (data.type == 'google') {      

        const usuario = await this.usuarioRepositorio.getByEmailUser(
          data.email
        );
        console.log(data)

        if (!usuario) {
          console.log(usuario)
          let clientGoogle = {};

          if (!clientGoogle['nome_empresa']) {
            clientGoogle['nome_empresa'] = data.firstName;
            clientGoogle['nome_fantasia'] = data.firstName;
          }
          console.log(clientGoogle)
          const criarCliente = await this.configClienteRepository.createCliente(
            {
              nome_fantasia: data.firstName,
              nome_empresa: data.firstName
            },
          );          
          

          let novoUsuarioGoogle = {
            nome: data.firstName,
            sobrenome: data.lastName,
            email: data.email,
            linkFoto: data.picture
          };

          novoUsuarioGoogle['isAdmin'] = true;
          novoUsuarioGoogle['primeiro_acesso'] = true;
          novoUsuarioGoogle['gerente_conta'] = true;
          novoUsuarioGoogle['empresa_configId'] = Number(criarCliente.id);

          await this.createUsuario(novoUsuarioGoogle);

          return true
        }
        return true;
      }
      const cliente = data.cliente;
      const dataUsuario = data.usuario;

      if (!cliente.cnpj_cpf) {
        cliente.cnpj_cpf = dataUsuario.cpf;
      }

      if (cliente && dataUsuario && cliente.cnpj_cpf && cliente.email) {
        const hasCliente = await this.configClienteRepository.getByCnpjEmailCliente(
          cliente.cnpj_cpf,
          cliente.email
        );

        if (!hasCliente) {
          if (!cliente['nome_empresa']) {
            cliente['nome_empresa'] = dataUsuario.nome;
            cliente['nome_fantasia'] = dataUsuario.nome;
          }
          const criarCliente = await this.configClienteRepository.createCliente(
            cliente,
          );
          if (criarCliente) {
            const usuario = await this.usuarioRepositorio.getByEmailUser(
              dataUsuario.email,
            );
            if (usuario) {

              if (!usuario.verifiedAt) {
                await this.sendWelcomeEmail(usuario);

                return {
                  msg: 'Usuário Não Verificado, verifique seu Email! ',
                  status: false
                };
              } else {
                return {
                  msg: 'CPF ou CNPJ já cadastrado.',
                  status: false
                };

              }

            }
            if (!usuario) {
              dataUsuario['type'] = 'normal';
              dataUsuario['isAdmin'] = true;
              dataUsuario['primeiro_acesso'] = true;
              dataUsuario['gerente_conta'] = true;
              dataUsuario['empresa_configId'] = Number(criarCliente.id);

              const usuarioNovo = await this.createUsuario(dataUsuario);
              if (usuarioNovo) {

                const emailEnviado = await this.sendWelcomeEmail(dataUsuario);

                if (emailEnviado) {
                  return {
                    msg: 'Usuário Criado com Sucesso, Verifique o Seu Email!! ',
                    status: true
                  };

                } else {
                  return {
                    msg: 'Problemas para enviar email de validação',
                    status: false
                  };
                }

              }
              return {
                msg: 'Erro para Criar Usuário',
                status: false
              };
            }
          }
        } else {
          return {
            msg: 'CPF ou CNPJ já cadastrado.',
            status: false
          };

        }
        throw new NotAcceptableException();
      } else if (dataUsuario) {
        const usuario = await this.usuarioRepositorio.getByEmailUser(
          dataUsuario.email,
        );

        if (usuario) {

          const emailEnviado = await this.sendWelcomeEmail(dataUsuario);

          if (emailEnviado) {
            return {
              msg: 'Usuário Criado com Sucesso, Verifique o Seu Email!! ',
              status: true
            };

          } else {
            return {
              msg: 'Problemas para enviar email de validação',
              status: false
            };
          }

        }

        if (!usuario) {
          const criarCliente = await this.configClienteRepository.createCliente(
            cliente,
          );
          if (criarCliente) {
            // dataUsuario['isAdmin'] = true;
            // dataUsuario['primeiro_acesso'] = true;
            // dataUsuario['gerente_conta'] = true;
            dataUsuario['empresa_configId'] = Number(criarCliente.id);

            empresa_config: {
              connect: { id: 4 }  // Aqui você usa `connect` para vincular à empresa_config existente
            }
            
            dataUsuario['type'] = 'normal';
            await this.createUsuario(dataUsuario);

            const emailEnviado = await this.sendWelcomeEmail(dataUsuario);

            if (emailEnviado) {
              return {
                msg: 'Usuário Criado com Sucesso, Verifique o Seu Email!! ',
                status: true
              };

            } else {
              return {
                msg: 'Problemas para enviar email de validação',
                status: false
              };
            }



          }
        } else {
          return {
            msg: 'Erro para Criar Usuário',
            status: false
          };;
        }
      }
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async atualizarUsuario(data: any) {
    try {
      const { id } = data;

      if (data.password && data.password != '') {
        data.password = await jwt.hash(data.password);
      }
      const dataUsuario = data;

      return await this.usuarioRepositorio.updateUser(Number(id), dataUsuario);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllUsuario(id) {
    try {
      const getAllUsuarios = await this.usuarioRepositorio.getUserAll(
        Number(id),
      );

      return getAllUsuarios.map((usuario) => {
        delete usuario['password'];
        return usuario;
      });
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createUsuario(data: any) {
    try {

      if (data.password && data.type != 'google') {
        data.password = await jwt.hash(data.password);
      }
      const usuario = await this.usuarioRepositorio.getByEmailUser(data.email);
      let usuarioInfo = data;

      delete usuarioInfo['modulos'];
      delete usuarioInfo['sub'];

      if (!usuario) {
        let empresa_configId = usuarioInfo.empresa_configId;
       delete usuarioInfo['empresa_configId'];
       delete usuarioInfo['type'];
        //criando usario na base
        const novoUsuario = await this.usuarioRepositorio.createUser(empresa_configId, usuarioInfo);

        if (novoUsuario) {
          if (data.empresa_configId) {
            if (data.modulos && data.sub) {
              data['id'] = Number(novoUsuario.id);
              await this.atualizarPermissoesModulos(data);

              return {
                msg: 'Criado com Sucesso',
                error: false,
              };
            } else {
              data['id'] = Number(novoUsuario.id);
              const permissaoAdmin = await this.permissaoAdmin(data);

              return permissaoAdmin;
            }
          }
          return {
            msg: 'Erro para Criar Usuário',
            status: false
          };
        } else {
          return {
            msg: 'Erro para Criar Usuário',
            status: false
          };;
        }
      } else {
        return {
          msg: 'Erro para Criar Usuário',
          status: false
        };;
      }
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async permissaoAdmin(data) {
    //permissao admin
    const modulos = await this.modulosRepository.getAllModulos();
    const subModulos = await this.subModulosRepository.getAllSubModulos();

    const userId = Number(data.id);
    if (userId) {
      let permissaoModulos = modulos.map((m) => {
        return {
          userId: userId,
          moduloId: Number(m.id),
          ver: true,
        };
      });

      let permissaoSubModulos = subModulos.map((s) => {
        return {
          userId: userId,
          subModuloId: Number(s.id),
          editar: true,
          ver: true,
          deletar: true,
        };
      });

      const moduloPerm =
        await this.modulosPermissaoRepository.createManyModulosUsuario(
          permissaoModulos,
        );
      const moduloSubPermi =
        await this.subModulosPermissaoRepository.createManySubModulosUsuario(
          permissaoSubModulos,
        );

      if (moduloSubPermi && moduloPerm) {
        return {
          msg: 'Criado com Sucesso',
          error: false,
        };
      }
    }

    return {
      msg: 'Não Criado Permissão ao Usuário',
      error: true,
    };
  }
  async deleteUsuario(data: any) {
    try {
      const id = data.id;
      return await this.usuarioRepositorio.deleteUser(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async salvarFotoPerfil(data: any) {
    try {
      // return 'ok';
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async atualizarPermissoesModulos(data: any) {
    try {
      const id = Number(data.id);
      if (id) {
        const modulos = data.modulos;
        const subModulos = data.sub;

        await this.modulosPermissaoRepository.deleteManyModulosUsuario(id);
        await this.modulosPermissaoRepository.createManyModulosUsuario(modulos);
        await this.subModulosPermissaoRepository.deleteManySubModulosUsuario(
          id,
        );

        return await this.subModulosPermissaoRepository.createManySubModulosUsuario(
          subModulos,
        );
      } else {
        return {
          msg: 'Não Atualizado Usuário',
          error: true,
        };
      }
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
