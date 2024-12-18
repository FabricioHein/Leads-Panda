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
exports.ClientesRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ClientesRepository = class ClientesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getByIdName(name) {
        return await this.prisma.cliente.findMany({
            where: {
                nome: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        });
    }
    async countClientesByEmpresa(empresa_configId) {
        const count = await this.prisma.cliente.count({
            where: {
                empresa_configId: empresa_configId
            },
        });
        return count;
    }
    async getByIdCPF(cpf, empresa_configId) {
        return await this.prisma.cliente.findFirst({
            where: {
                cpf: cpf,
                empresa_configId: empresa_configId
            }, select: {
                id: true,
                nome: true,
                cpf: true
            },
        });
    }
    async getClientesAll(empresa_configId) {
        return await this.prisma.cliente.findMany({
            where: {
                empresa_configId: empresa_configId,
            },
            include: {
                historico_cliente: {
                    orderBy: {
                        created_at: 'asc',
                    },
                    select: {
                        valor: true,
                        operador: true,
                        created_at: true,
                    },
                },
                sexo: true,
            },
        });
    }
    async getByIdClientes(id) {
        return await this.prisma.cliente.findFirst({
            where: {
                id: id,
            },
        });
    }
    async createClientes(data) {
        console.log(data);
        return await this.prisma.cliente.create({
            data: data,
        });
    }
    async updateClientes(id, data) {
        return await this.prisma.cliente.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteClientes(id) {
        return await this.prisma.cliente.delete({
            where: {
                id: id,
            },
        });
    }
};
ClientesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ClientesRepository);
exports.ClientesRepository = ClientesRepository;
//# sourceMappingURL=clientes.repository.js.map