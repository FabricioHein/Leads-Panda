import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoricoClienteRepository {
  constructor(private prisma: PrismaService) {}
  async getHistoricoCliente() {
    return await this.prisma.historico_cliente.findFirstOrThrow();
  }
  async getByIdHistoricoCliente(id) {
    return await this.prisma.historico_cliente.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createHistoricoCliente(data) {
    return await this.prisma.historico_cliente.create({
      data: data,
    });
  }

  async updateHistoricoCliente(id, data) {
    return await this.prisma.historico_cliente.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteHistoricoCliente(id) {
    return await this.prisma.historico_cliente.delete({
      where: {
        id: id,
      },
    });
  }
}
