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
exports.ProcessoRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ProcessoRepository = class ProcessoRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProcessoAll(id) {
        return await this.prisma.processo.findMany({
            orderBy: {
                etapa: 'asc',
            },
            where: {
                projeto: {
                    id: id,
                },
            },
            select: {
                id: true,
                title: true,
                color: true,
                task: true,
                etapa: true,
            },
        });
    }
    async getByIdProcesso(id) {
        return await this.prisma.processo.findFirst({
            where: {
                id: id,
            },
        });
    }
    async createProcesso(data) {
        return await this.prisma.processo.create({
            data: data,
        });
    }
    async updateProcesso(id, data) {
        return await this.prisma.processo.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteProcesso(id) {
        return await this.prisma.processo.delete({
            where: {
                id: id,
            },
        });
    }
    async createManyProcesso(data) {
        return await this.prisma.processo.createMany({
            data: data,
        });
    }
    async deleteManyProcesso(id) {
        return await this.prisma.processo.deleteMany({
            where: {
                id: id,
            },
        });
    }
};
ProcessoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ProcessoRepository);
exports.ProcessoRepository = ProcessoRepository;
//# sourceMappingURL=processo.repository.js.map