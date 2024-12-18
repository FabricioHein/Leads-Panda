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
exports.ConfigRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ConfigRepository = class ConfigRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getByIdUserConfig(id) {
        try {
            return await this.prisma.users.findFirst({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    nome: true,
                    sobrenome: true,
                    isAdmin: true,
                    cpf: true,
                    telefone: true,
                    email: true,
                    linkFoto: true
                },
            });
        }
        catch (error) {
            return error;
        }
    }
    async getByIdUserEmpresa(id) {
        try {
            return await this.prisma.empresa_config.findFirst({
                where: {
                    Users: {
                        some: {
                            id: id,
                        },
                    },
                },
            });
        }
        catch (error) {
            return error;
        }
    }
    async getPermissaoModulos(id) {
        try {
            return this.prisma.modulo.findMany({
                where: {
                    permissao_modulos: {
                        some: {
                            userId: {
                                equals: id,
                            },
                        },
                    },
                },
                include: {
                    permissao_modulos: {
                        select: {
                            ver: true,
                        },
                    },
                    subModulo: {
                        include: {
                            permissao_sub_modulos: {
                                select: {
                                    id: true,
                                    editar: true,
                                    deletar: true,
                                    ver: true,
                                },
                            },
                        },
                    },
                },
            });
        }
        catch (error) {
            return error;
        }
    }
    async getPermissaoSubModulos(id) {
        try {
            return this.prisma.subModulo.findMany({
                where: {
                    permissao_sub_modulos: {
                        some: {
                            userId: {
                                equals: id,
                            },
                        },
                    },
                },
                include: {
                    permissao_sub_modulos: {
                        select: {
                            id: true,
                            ver: true,
                            deletar: true,
                            editar: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            return error;
        }
    }
    async getModulosSistema() {
        return await this.prisma.modulo.findMany({
            include: {
                subModulo: true,
            },
        });
    }
    async getPermissaoDepartamento() {
        return '';
    }
    async getPermissaoSecretaria() {
        return '';
    }
};
ConfigRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ConfigRepository);
exports.ConfigRepository = ConfigRepository;
//# sourceMappingURL=config.repository.js.map