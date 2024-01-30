import { Injectable } from '@nestjs/common';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { HistoricoClienteRepository } from 'src/repositories/historico-cliente.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class ClientesService {
  constructor(
    private clientesRepository: ClientesRepository,
    private historicoClienteRepository: HistoricoClienteRepository,
  ) {}

  async createClienteConfig(data: any) {
    const usuario = await this.createClientes(data);

    if (usuario) {
      // //permissao admin
      // const modulos = await prisma.modulo.findMany();
      // const subModulos = await prisma.subModulo.findMany();
      // let permissaoModulos = modulos.map(m => {
      //   return {
      //     userId: user.id,
      //     moduloId: m.id,
      //     ver: true,
      //   };
      // });
      // let permissaoSubModulos = subModulos.map(s => {
      //   return {
      //     userId: user.id,
      //     subModuloId: s.id,
      //     editar: true,
      //     ver: true,
      //     deletar: true,
      //   };
      // });
      // await prisma.permissao_modulos.createMany({
      //   data: [...permissaoModulos],
      // });
      // await prisma.permissao_sub_modulos.createMany({
      //   data: [...permissaoSubModulos],
      // });
    }

    return '';
  }
  async atualizarClientes(data: any) {
    try {
      const { id } = data;
      const dataClientes = data;

      return await this.clientesRepository.updateClientes(
        Number(id),
        dataClientes,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllClientes(clienteId) {
    try {
      return await this.clientesRepository.getClientesAll(Number(clienteId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createHistoricoClientes(data: any) {
    try {
      return await this.historicoClienteRepository.createHistoricoCliente(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createClientes(data: any) {
    try {
      return await this.clientesRepository.createClientes(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteClientes(data: any) {
    try {
      const id = data.id;
      return await this.clientesRepository.deleteClientes(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
