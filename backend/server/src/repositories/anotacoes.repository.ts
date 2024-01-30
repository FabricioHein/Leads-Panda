import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnotacaoRepository {
  constructor(private prisma: PrismaService) {}

  async getAnotacaoAll(taskId) {
    return await this.prisma.anotacoes.findMany({
      where: {
        taskId: taskId,
      },
    });
  }
  async getByIdAnotacao(id) {
    return await this.prisma.anotacoes.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createAnotacao(data) {
    return await this.prisma.anotacoes.create({
      data: data,
    });
  }
  async updateAnotacao(id, data) {
    return await this.prisma.anotacoes.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteAnotacao(id) {
    return await this.prisma.anotacoes.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyAnotacao(data) {
    return await this.prisma.anotacoes.createMany({
      data: data,
    });
  }
  async deleteManyTaskSubSub(id) {
    return await this.prisma.anotacoes.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
