import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MotivosRepository {
  constructor(private prisma: PrismaService) {}

  async getMotivosAll(empresa_configId) {
    return await this.prisma.motivos.findMany({
      where: {
        empresa_configId: empresa_configId,
      },
    });
  }
  async getByIdMotivos(id) {
    return await this.prisma.motivos.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createMotivos(data) {
    return await this.prisma.motivos.create({
      data: data,
    });
  }
  async updateMotivos(id, data) {
    return await this.prisma.motivos.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteMotivos(id) {
    return await this.prisma.motivos.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyMotivos(data) {
    return await this.prisma.motivos.createMany({
      data: data,
    });
  }
  async deleteManyMotivosProcesso(id) {
    return await this.prisma.motivos.deleteMany({});
  }
}
