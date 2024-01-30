import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigClienteRepository {
  constructor(private prisma: PrismaService) {}
  async getCliente() {
    return await this.prisma.configuracaoCliente.findFirstOrThrow();
  }
  async getByIdCliente(id) {
    return await this.prisma.configuracaoCliente.findFirst({
      where: {
        id: id,
      },
    });
  }
  async getByCnpjCliente(cnpj_cpf) {
    return await this.prisma.configuracaoCliente.findFirst({
      where: {
        cnpj_cpf: cnpj_cpf,
      },
    });
  }
  async createCliente(data) {
    return await this.prisma.configuracaoCliente.create({
      data: data,
    });
  }

  async updateCliente(id, data) {
    return await this.prisma.configuracaoCliente.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteCliente(id) {
    return await this.prisma.configuracaoCliente.delete({
      where: {
        id: id,
      },
    });
  }
}
