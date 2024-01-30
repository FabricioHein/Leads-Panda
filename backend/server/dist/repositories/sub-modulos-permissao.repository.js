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
exports.SubModulosPermissaoRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let SubModulosPermissaoRepository = class SubModulosPermissaoRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createManySubModulosUsuario(data) {
        return await this.prisma.permissao_sub_modulos.createMany({
            data: data,
        });
    }
    async deleteManySubModulosUsuario(id) {
        return await this.prisma.permissao_sub_modulos.deleteMany({
            where: {
                userId: {
                    equals: id,
                },
            },
        });
    }
};
SubModulosPermissaoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], SubModulosPermissaoRepository);
exports.SubModulosPermissaoRepository = SubModulosPermissaoRepository;
//# sourceMappingURL=sub-modulos-permissao.repository.js.map