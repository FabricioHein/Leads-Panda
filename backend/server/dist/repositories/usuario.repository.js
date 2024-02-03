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
exports.UsuarioRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let UsuarioRepository = class UsuarioRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOne(username) {
        const user = await this.prisma.users.findFirst({
            where: {
                OR: [
                    {
                        nome: username,
                    },
                    {
                        email: username,
                    },
                ],
            },
        });
        if (user)
            return user;
    }
    async getUserAll(clienteId) {
        return await this.prisma.users.findMany({
            where: {
                clienteId: clienteId,
            },
            include: {
                permissao_modulos: {
                    include: {
                        modulo: {
                            include: {
                                subModulo: {
                                    select: {
                                        id: true,
                                        permissao_sub_modulos: {
                                            select: {
                                                ver: true,
                                                deletar: true,
                                                editar: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    async getByIdUser(id) {
        return await this.prisma.users.findFirst({
            where: {
                id: id,
            },
        });
    }
    async getByEmailUser(email) {
        return await this.prisma.users.findFirst({
            where: {
                email: email,
            },
        });
    }
    async createUser(data) {
        return await this.prisma.users.create({
            data: data,
        });
    }
    async updateUser(id, data) {
        return await this.prisma.users.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteUser(id) {
        return await this.prisma.users.delete({
            where: {
                id: id,
            },
        });
    }
    async findUnique(email) {
        return await this.prisma.users.findUnique({
            where: {
                email: email,
            },
        });
    }
    async update(data) {
        return await this.prisma.users.update(data);
    }
    async resetPasswordFindUnique(data) {
        return await this.prisma.resetPassword.findUnique(data);
    }
    async createResetPassword(data) {
        return await this.prisma.resetPassword.create(data);
    }
    async deleteResetPassword(data) {
        return await this.prisma.resetPassword.delete(data);
    }
    async emailVerificationCreate(data) {
        return await this.prisma.emailVerification.create(data);
    }
    async findVerificationCreate(email) {
        return await this.prisma.emailVerification.findUnique({
            where: {
                email: email
            }
        });
    }
    async deletVficationCreate(email) {
        return await this.prisma.emailVerification.delete({
            where: {
                email: email
            }
        });
    }
};
UsuarioRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map