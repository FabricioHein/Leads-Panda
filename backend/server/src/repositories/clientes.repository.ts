import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesRepository {
  constructor(private prisma: PrismaService) {}
  async getClientesAll(clienteId) {
    return await this.prisma.cliente.findMany({
      where: {
        configuracaoClienteId: clienteId,
      },
      include: {
        historico_cliente: {
          orderBy: {
            created_at: 'asc',
          },
          select: {
            valor: true,
            operador: true,
            created_at: true,
          },
        },
        sexo: true,
      },
    });
  }
  async getByIdClientes(id) {
    return await this.prisma.cliente.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createClientes(data) {
    console.log(data);
    return await this.prisma.cliente.create({
      data: data,
    });
  }

  async updateClientes(id, data) {
    return await this.prisma.cliente.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteClientes(id) {
    return await this.prisma.cliente.delete({
      where: {
        id: id,
      },
    });
  }
}
