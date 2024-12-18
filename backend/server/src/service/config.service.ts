import { ConfigRepository } from '../repositories/config.repository';
import { Injectable } from '@nestjs/common';
import { EnumRepository } from 'src/repositories/enum.repository';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { TaskRepository } from 'src/repositories/task.repository';
import { ChatRepository } from 'src/repositories/chat.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class ConfigService {
  constructor(
    private configRepository: ConfigRepository,
    private configClienteRepository: ConfigClienteRepository,
    private enumRepository: EnumRepository,
    private clientesRepository: ClientesRepository,
    private taskRepository: TaskRepository,
    private chatRepository: ChatRepository
  ) { }

  async getDashboard(empresa_configId) {
    try {
      //total de contatos
      //total de clientes
      //total de produtos
      //total de leads
      //total de tarefas em aberto // concluido
      //soma total de valores potencial de negócio
      //soma total de negócios abertos
      //soma total de negócios pendentes;
      //lista das ultimas vendas
      let empresaId = Number(empresa_configId);

      const contatos = await this.clientesRepository.countClientesByEmpresa(empresaId);
      const leads = await this.taskRepository.countTasksByEmpresa(empresaId);
      const sumTasksByEmpresaValorInicial = await this.taskRepository.sumTasksByEmpresaValorInicial(empresaId);
      const sumTasksByEmpresaValorFinal = await this.taskRepository.sumTasksByEmpresaValorFinal(empresaId);

      const chatsAtivos = await this.chatRepository.countChatsByEmpresaAtivo(empresaId);
      const naochatsAtivos = await this.chatRepository.countChatsByEmpresaNaoAtivo(empresaId);

      const dashBoard = {
        totalCliente: contatos ? contatos : 0,
        totalLeads: leads ? leads : 0,
        totalPotencialNegocioInicial: sumTasksByEmpresaValorInicial ? sumTasksByEmpresaValorInicial : 0,
        totalPotencialNegocioFinal: sumTasksByEmpresaValorFinal ? sumTasksByEmpresaValorFinal : 0,
        chatAtivos: chatsAtivos ? chatsAtivos : 0,
        naochatsAtivos: naochatsAtivos ? naochatsAtivos : 0
      };

      return dashBoard;
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async atualizarConfig(data: any) {
    try {
      const { id } = data;
      const configCliente = data;
      return await this.configClienteRepository.updateCliente(
        id,
        configCliente,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async getConfig(id: Number, token: string) {
    try {
      const permissaoModulos = await this.configRepository.getPermissaoModulos(
        Number(id),
      );
      const permissaoSubModulos =
        await this.configRepository.getPermissaoSubModulos(Number(id));

      const getModulosSistema = await this.configRepository.getModulosSistema();
      const usuario = await this.configRepository.getByIdUserConfig(Number(id));
      const empresa = await this.configRepository.getByIdUserEmpresa(
        Number(id),
      );

      const sexoEnum = await this.enumRepository.getSexo();
      const opcaoEnum = await this.enumRepository.getOpcao();
      const tipoUsuario = await this.enumRepository.getUsuario();

      const permissaoMod = [];

      permissaoModulos.forEach((i) => {
        i.permissao_modulos.forEach((j) => {
          let hasModulo = permissaoMod.filter((n) => n.id === i.id);

          if (hasModulo.length === 0) {
            const modulos = {
              id: i.id,
              modulo: i.nome,
              url_modulo: i.url,
              ativo_modulo: i.ativo,
              icon_modulo: i.icon,
              ver_modulo: j.ver,
              ordem: i.ordem,
              submodulos: [],
            };

            //add modulos
            permissaoMod.push(modulos);

            permissaoSubModulos.forEach((p) => {
              if (p.moduloId === i.id) {
                p.permissao_sub_modulos.forEach((m) => {
                  let hassubModulo = modulos.submodulos.filter(
                    (s) => s.id === p.id,
                  );
                  if (hassubModulo.length === 0) {
                    modulos.submodulos.push({
                      id: p.id,
                      nome: p.nome,
                      url: p.url,
                      ativo: p.ativo,
                      icon: p.icon,
                      ver: m.ver,
                      editar: m.editar,
                      deletar: m.deletar,
                      ordem: p.ordem,
                    });
                  }
                });
              }
            });
          }
        });
      });

      if (empresa && usuario && token) {
        return {
          token: token,
          usuario: usuario,
          sistema: {
            permissao: permissaoMod,
            modulos: getModulosSistema,
            enum: {
              opcao: opcaoEnum,
              sexo: sexoEnum,
              tipoUsuario: tipoUsuario,
            },
          },
          cliente: empresa,
        };
      } else {
        return {
          erro: 'Usuario Não existe na Base Ou Vínculo com a Empresa Config',
        };
      }
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
