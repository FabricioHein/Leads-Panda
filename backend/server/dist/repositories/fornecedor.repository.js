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
exports.FornecedorRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let FornecedorRepository = class FornecedorRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
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
};
FornecedorRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], FornecedorRepository);
exports.FornecedorRepository = FornecedorRepository;
//# sourceMappingURL=fornecedor.repository.js.map