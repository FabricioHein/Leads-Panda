import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjetoRepository {
  constructor(private prisma: PrismaService) {}

  async getProjetoAll(empresa_configId) {
    return await this.prisma.projeto.findMany({
      where: {
        empresa_configId: empresa_configId,
      },
    });
  }
  async getByIdProjeto(id) {
    return await this.prisma.projeto.findFirst({
      where: {
        id: id,
      },
    });
  }
  async getByIdProjetoEtapa(id) {
    return await this.prisma.projeto.findFirst({
      where: {
        id: id,
      },
      include: {
        processo: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }
  async createProjeto(data) {
    return await this.prisma.projeto.create({
      data: data,
    });
  }

  async updateProjeto(id, data) {
    return await this.prisma.projeto.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteProjeto(id) {
    return await this.prisma.projeto.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyProjeto(data) {
    return await this.prisma.projeto.createMany({
      data: data,
    });
  }
  async deleteManyProjeto(id) {
    return await this.prisma.projeto.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
