import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigClienteRepository {
  constructor(private prisma: PrismaService) {}
  async getCliente() {
    return await this.prisma.empresa_config.findFirstOrThrow();
  }
  async getByIdCliente(id) {
    return await this.prisma.empresa_config.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createCliente(data) {
    return await this.prisma.empresa_config.create({
      data: data,
    });
  }

  async updateCliente(id, data) {
    return await this.prisma.empresa_config.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteCliente(id) {
    return await this.prisma.empresa_config.delete({
      where: {
        id: id,
      },
    });
  }
}
