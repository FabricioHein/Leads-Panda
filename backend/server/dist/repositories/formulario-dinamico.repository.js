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
exports.FormularioDinamicoRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let FormularioDinamicoRepository = class FormularioDinamicoRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getFormularioDinamicoAll(empresa_configId) {
        return await this.prisma.formulario_dinamico.findMany({
            where: {
                empresa_configId: empresa_configId,
            },
            include: {
                form_ask: true,
            },
        });
    }
    async getByURLFormularioDinamico(url_formulario) {
        return await this.prisma.formulario_dinamico.findFirst({
            where: {
                url_formulario: url_formulario,
            },
        });
    }
    async getByURLFormularioDinamicoOpen(url_formulario) {
        return await this.prisma.formulario_dinamico.findFirst({
            where: {
                url_formulario: url_formulario,
            },
        });
    }
    async getByIdFormularioDinamico(id) {
        return await this.prisma.formulario_dinamico.findFirst({
            where: {
                id: id,
            },
        });
    }
    async createFormularioDinamico(data) {
        return await this.prisma.formulario_dinamico.create({
            data: data,
        });
    }
    async updateFormularioDinamico(id, data) {
        return await this.prisma.formulario_dinamico.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteFormularioDinamico(id) {
        return await this.prisma.formulario_dinamico.delete({
            where: {
                id: id,
            },
        });
    }
};
FormularioDinamicoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], FormularioDinamicoRepository);
exports.FormularioDinamicoRepository = FormularioDinamicoRepository;
//# sourceMappingURL=formulario-dinamico.repository.js.map