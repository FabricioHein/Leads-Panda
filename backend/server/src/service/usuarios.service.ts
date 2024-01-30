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

const jwt = new Jwt();
@Injectable()
export class UsuariosService {
  constructor(
    private usuarioRepositorio: UsuarioRepository,
    private modulosPermissaoRepository: ModulosPermissaoRepository,
    private subModulosPermissaoRepository: SubModulosPermissaoRepository,
    private firebaseService: FirebaseService,
    private configClienteRepository: ConfigClienteRepository,
    private subModulosRepository: SubModulosRepository,
    private modulosRepository: ModulosRepository,
  ) {}
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
      const cliente = data.cliente;
      const dataUsuario = data.usuario;

      if(!cliente.cnpj_cpf){
        cliente.cnpj_cpf = dataUsuario.cpf;
      }

      if (cliente && dataUsuario &&  cliente.cnpj_cpf) {
        const hasCliente = await this.configClienteRepository.getByCnpjCliente(
          cliente.cnpj_cpf,
        );
        console.log(hasCliente)

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
            if (!usuario) {
              dataUsuario['isAdmin'] = true;
              dataUsuario['primeiro_acesso'] = true;
              dataUsuario['gerente_conta'] = true;
              dataUsuario['clienteId'] = Number(criarCliente.id);

              const usuarioNovo = await this.createUsuario(dataUsuario);
              if (usuarioNovo) {
                return SucessAceptable('Usuário Criado com Sucesso');
              }
              return ErroNotAceptable('Erro para Criar Usuário');
            }
          }
        } else {
          return ErroNotAceptable('Usuário Já Cadastrado!');
        }
        throw new NotAcceptableException();
      } else if (dataUsuario) {
        const usuario = await this.usuarioRepositorio.getByEmailUser(
          dataUsuario.email,
        );

        if (!usuario) {
          const criarCliente = await this.configClienteRepository.createCliente(
            cliente,
          );
          if (criarCliente) {
            // dataUsuario['isAdmin'] = true;
            // dataUsuario['primeiro_acesso'] = true;
            // dataUsuario['gerente_conta'] = true;

            dataUsuario['clienteId'] = Number(criarCliente.id);
            return await this.createUsuario(dataUsuario);
          }
        } else {
          return ErroNotAceptable('Usuário Já Existe');
        }
      }
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async atualizarUsuario(data: any) {
    try {
      const { id } = data;

      if (data.password) {
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
      if (data.password) {
        data.password = await jwt.hash(data.password);
      }
      const usuario = await this.usuarioRepositorio.getByEmailUser(data.email);
      let usuarioInfo = data;

      delete usuarioInfo['modulos'];
      delete usuarioInfo['sub'];

      if (!usuario) {
        //criando usario na base
        const novoUsuario = await this.usuarioRepositorio.createUser({
          ...usuarioInfo,
        });

        if (novoUsuario) {
          if (data.clienteId) {
            if (data.modulos && data.sub) {
              data['id'] = Number(novoUsuario.id);
              await this.atualizarPermissoesModulos(data);

              return ErroNotAceptable('Usuário Criado com Sucesso');
            } else {
              data['id'] = Number(novoUsuario.id);
              const permissaoAdmin = await this.permissaoAdmin(data);

              return permissaoAdmin
                ? SucessAceptable('Usuário Criado com Sucesso')
                : ErroNotAceptable('Erro para Criar Permissão');
            }
          }
          return ErroNotAceptable('Erro para Criar Permissão');
        } else {
          return ErroNotAceptable('Usuário Já Existe');
        }
      } else {
        return ErroNotAceptable('Usuário Já Existe');
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
