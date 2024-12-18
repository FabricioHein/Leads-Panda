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
exports.ContatosRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ContatosRepository = class ContatosRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
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
};
ContatosRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ContatosRepository);
exports.ContatosRepository = ContatosRepository;
//# sourceMappingURL=contatos.repository.js.map