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
exports.AnotacaoRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let AnotacaoRepository = class AnotacaoRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAnotacaoAll(taskId) {
        return await this.prisma.anotacoes.findMany({
            where: {
                taskId: taskId,
            },
        });
    }
    async getByIdAnotacao(id) {
        return await this.prisma.anotacoes.findFirst({
            where: {
                id: id,
            },
        });
    }
    async createAnotacao(data) {
        return await this.prisma.anotacoes.create({
            data: data,
        });
    }
    async updateAnotacao(id, data) {
        return await this.prisma.anotacoes.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteAnotacao(id) {
        return await this.prisma.anotacoes.delete({
            where: {
                id: id,
            },
        });
    }
    async createManyAnotacao(data) {
        return await this.prisma.anotacoes.createMany({
            data: data,
        });
    }
    async deleteManyTaskSubSub(id) {
        return await this.prisma.anotacoes.deleteMany({
            where: {
                id: id,
            },
        });
    }
};
AnotacaoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], AnotacaoRepository);
exports.AnotacaoRepository = AnotacaoRepository;
//# sourceMappingURL=anotacoes.repository.js.map