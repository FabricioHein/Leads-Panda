import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProcessoRepository {
  constructor(private prisma: PrismaService) {}

  async getProcessoAll(id) {
    return await this.prisma.processo.findMany({
      orderBy: {
        etapa: 'asc',
      },
      where: {
        projeto: {
          id: id,
        },
      },
      select: {
        id: true,
        title: true,
        color: true,
        task: true,
        etapa: true,
      },
    });
  }
  async getByIdProcesso(id) {
    return await this.prisma.processo.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createProcesso(data) {
    return await this.prisma.processo.create({
      data: data,
    });
  }

  async updateProcesso(id, data) {
    return await this.prisma.processo.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteProcesso(id) {
    return await this.prisma.processo.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyProcesso(data) {
    return await this.prisma.processo.createMany({
      data: data,
    });
  }
  async deleteManyProcesso(id) {
    return await this.prisma.processo.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
