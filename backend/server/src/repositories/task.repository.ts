import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async getTaskAll() {
    return await this.prisma.task.findMany();
  }
  async getVisaoGeralTask(filter) {
    return await this.prisma.task.findMany({
      where: filter,
    });
  }
  async getByIdTask(id) {
    return await this.prisma.task.findFirst({
      where: {
        id: id,
      },
      include: {
        processo: {
          select: {
            title: true,
            projeto: true,
          },
        },
        sub_task: true,
        anotacoes: true,
        arquivos: true,
        email: true,
        Contacts: true,
        Users: true,
        venda: true,
      },
    });
  }
  async createTask(data) {
    return await this.prisma.task.create({
      data: data,
    });
  }
  async updateTask(id, data) {
    return await this.prisma.task.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteTask(id) {
    return await this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyTask(data) {
    return await this.prisma.task.createMany({
      data: data,
    });
  }
  async deleteManyTaskProcesso(id) {
    return await this.prisma.task.deleteMany({
      where: {
        processoId: id,
      },
    });
  }
}
