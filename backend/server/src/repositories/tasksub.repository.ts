import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskSubRepository {
  constructor(private prisma: PrismaService) {}

  async getVisaoGeralTaskSub(where) {
    return await this.prisma.sub_task.findMany({
      where: where,
      include: {
        task: true,
      },
    });
  }
  async getTaskSubAllTaskId(taskId) {
    return await this.prisma.sub_task.findMany({
      where: {
        taskId: taskId,
      },
    });
  }
  async getByIdTaskSub(id) {
    return await this.prisma.sub_task.findFirst();
  }
  async createTaskSub(data) {
    return await this.prisma.sub_task.create({
      data: data,
    });
  }
  async updateTaskSub(id, data) {
    return await this.prisma.sub_task.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteTaskSub(id) {
    return await this.prisma.sub_task.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyTaskSub(data) {
    return await this.prisma.sub_task.createMany({
      data: data,
    });
  }
  async deleteManyTaskSubSub(id) {
    return await this.prisma.sub_task.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
