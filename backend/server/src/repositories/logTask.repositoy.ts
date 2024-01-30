import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LogTasksRepository {
  constructor(private prisma: PrismaService) {}

  async getLogTasksAll(taskId) {
    return await this.prisma.log_taks.findMany({
      where: {
        taskId: taskId,
      },
    });
  }
  async getByIdLogTasks(id) {
    return await this.prisma.log_taks.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createLogTasks(data) {
    return await this.prisma.log_taks.create({
      data: data,
    });
  }
  async updateLogTasks(id, data) {
    return await this.prisma.log_taks.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteLogTasks(id) {
    return await this.prisma.log_taks.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyLogTasks(data) {
    return await this.prisma.log_taks.createMany({
      data: data,
    });
  }
  async deleteManyTaskSubSub(id) {
    return await this.prisma.log_taks.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
