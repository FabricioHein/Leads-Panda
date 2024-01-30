import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FornecedorRepository {
  constructor(private prisma: PrismaService) {}
  async getFornecedorAll() {
    return await this.prisma.fornecedor.findMany();
  }
  async getByIdFornecedor(id) {
    return await this.prisma.fornecedor.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createFornecedor(data) {
    return await this.prisma.fornecedor.create({
      data: data,
    });
  }

  async updateFornecedor(id, data) {
    return await this.prisma.fornecedor.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteFornecedor(id) {
    return await this.prisma.fornecedor.delete({
      where: {
        id: id,
      },
    });
  }
}
