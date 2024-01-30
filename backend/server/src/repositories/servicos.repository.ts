import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicoRepository {
  constructor(private prisma: PrismaService) {}
  async getServicoAll() {
    return await this.prisma.servico.findMany();
  }
  async getByIdServico(id) {
    return await this.prisma.servico.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createServico(data) {
    return await this.prisma.servico.create({
      data: data,
    });
  }

  async updateServico(id, data) {
    return await this.prisma.servico.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteServico(id) {
    return await this.prisma.servico.delete({
      where: {
        id: id,
      },
    });
  }
}
