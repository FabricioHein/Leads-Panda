import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';
import { Email } from 'whatsapp-api-js/messages';

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
  async getByCnpjEmailCliente(cnpj_cpf, email) {
    return await this.prisma.configuracaoCliente.findFirst({
      where: {
       AND: [
        {
          cnpj_cpf: cnpj_cpf
        },
        {
          email: email
        }
       ]
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
