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
exports.ArquivosRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ArquivosRepository = class ArquivosRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getArquivosAll(taskId) {
        return await this.prisma.arquivos.findMany({
            where: {
                taskId: taskId,
            },
        });
    }
    async getByIdArquivos(id) {
        return await this.prisma.arquivos.findFirst({
            where: {
                id: id,
            },
        });
    }
    async createArquivos(data) {
        return await this.prisma.arquivos.create({
            data: data,
        });
    }
    async updateArquivos(id, data) {
        return await this.prisma.arquivos.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteArquivos(id) {
        return await this.prisma.arquivos.delete({
            where: {
                id: id,
            },
        });
    }
    async createManyArquivos(data) {
        return await this.prisma.arquivos.createMany({
            data: data,
        });
    }
    async deleteManyTaskSubSub(id) {
        return await this.prisma.arquivos.deleteMany({
            where: {
                id: id,
            },
        });
    }
};
ArquivosRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ArquivosRepository);
exports.ArquivosRepository = ArquivosRepository;
//# sourceMappingURL=arquivos.repository.js.map