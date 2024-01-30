"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSubRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let TaskSubRepository = class TaskSubRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
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
};
TaskSubRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], TaskSubRepository);
exports.TaskSubRepository = TaskSubRepository;
//# sourceMappingURL=tasksub.repository.js.map