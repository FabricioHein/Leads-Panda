import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VendaRepository {
  constructor(private prisma: PrismaService) {}

  async getVendaAll(taskId) {
    return await this.prisma.venda.findMany({});
  }
  async getByIdVenda(id) {
    return await this.prisma.venda.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createVenda(data) {
    return await this.prisma.venda.create({
      data: data,
    });
  }
  async updateVenda(id, data) {
    return await this.prisma.venda.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteVenda(id) {
    return await this.prisma.venda.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyVenda(data) {
    return await this.prisma.venda.createMany({
      data: data,
    });
  }
  async deleteManyTaskSubSub(id) {
    return await this.prisma.venda.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
