import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContatosRepository {
  constructor(private prisma: PrismaService) {}
  async getContatosAll(empresa_configId) {
    return await this.prisma.contacts.findMany({
      where: {
        empresa_configId: empresa_configId,
      },
    });
  }
  async getByIdContatos(id) {
    return await this.prisma.contacts.findFirst({
      where: {
        id: id,
      },
    });
  }
  async getByIdName(name) {
    return await this.prisma.contacts.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }
  async getByIdNumber(number) {
    return await this.prisma.contacts.findMany({
      where: {
        number: {
          contains: number,
        },
      },
    });
  }
  async getByIdContatosChat(id) {
    return await this.prisma.contacts.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        number: true,
        email: true,
        profilePicUrl: true,
      },
    });
  }
  async createContatos(data) {
    return await this.prisma.contacts.create({
      data: data,
    });
  }

  async updateContatos(id, data) {
    return await this.prisma.contacts.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteContatos(id) {
    return await this.prisma.contacts.delete({
      where: {
        id: id,
      },
    });
  }
}
