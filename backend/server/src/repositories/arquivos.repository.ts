import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArquivosRepository {
  constructor(private prisma: PrismaService) {}

  async getArquivosAll(taskId) {
    return await this.prisma.arquivos.findMany({
      where: {
        taskId: taskId,
      },
    });
  }
  async getByIdArquivos(id) {
    return await this.prisma.arquivos.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createArquivos(data) {
    return await this.prisma.arquivos.create({
      data: data,
    });
  }
  async updateArquivos(id, data) {
    return await this.prisma.arquivos.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteArquivos(id) {
    return await this.prisma.arquivos.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyArquivos(data) {
    return await this.prisma.arquivos.createMany({
      data: data,
    });
  }
  async deleteManyTaskSubSub(id) {
    return await this.prisma.arquivos.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
