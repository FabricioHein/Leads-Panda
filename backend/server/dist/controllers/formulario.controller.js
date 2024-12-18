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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioController = void 0;
const common_1 = require("@nestjs/common");
const formulario_service_1 = require("../service/formulario.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let FormularioController = class FormularioController {
    constructor(formularioService) {
        this.formularioService = formularioService;
    }
    async getAllFormularioDinamico(empresa_configId) {
        try {
            return await this.formularioService.getAllFormularioDinamico(empresa_configId);
        }
        catch (error) {
            return error;
        }
    }
    async getByURLFormularioDinamico(url) {
        try {
            return await this.formularioService.getByURLFormularioDinamico(url);
        }
        catch (error) {
            return error;
        }
    }
    async deleteFormularioDinamico(req) {
        try {
            return await this.formularioService.deleteFormularioDinamico(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createFormularioDinamico(req) {
        try {
            return await this.formularioService.createFormularioDinamico(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarFormularioDinamico(req) {
        try {
            return await this.formularioService.atualizarFormularioDinamico(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:empresa_configId'),
    __param(0, (0, common_1.Param)('empresa_configId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "getAllFormularioDinamico", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':url'),
    __param(0, (0, common_1.Param)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "getByURLFormularioDinamico", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "deleteFormularioDinamico", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "createFormularioDinamico", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "atualizarFormularioDinamico", null);
FormularioController = __decorate([
    (0, common_1.Controller)('api/formulario'),
    __metadata("design:paramtypes", [formulario_service_1.FormularioService])
], FormularioController);
exports.FormularioController = FormularioController;
//# sourceMappingURL=formulario.controller.js.map