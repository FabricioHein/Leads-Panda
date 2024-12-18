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
exports.MotivosRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let MotivosRepository = class MotivosRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMotivosAll(empresa_configId) {
        return await this.prisma.motivos.findMany({
            where: {
                empresa_configId: empresa_configId,
            },
        });
    }
    async getByIdMotivos(id) {
        return await this.prisma.motivos.findFirst({
            where: {
                id: id,
            },
        });
    }
    async createMotivos(data) {
        return await this.prisma.motivos.create({
            data: data,
        });
    }
    async updateMotivos(id, data) {
        return await this.prisma.motivos.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteMotivos(id) {
        return await this.prisma.motivos.delete({
            where: {
                id: id,
            },
        });
    }
    async createManyMotivos(data) {
        return await this.prisma.motivos.createMany({
            data: data,
        });
    }
    async deleteManyMotivosProcesso(id) {
        return await this.prisma.motivos.deleteMany({});
    }
};
MotivosRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], MotivosRepository);
exports.MotivosRepository = MotivosRepository;
//# sourceMappingURL=motivos.repository.js.map