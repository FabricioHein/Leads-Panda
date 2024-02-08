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
exports.AuthenticatorController = void 0;
const common_1 = require("@nestjs/common");
const authenticator_service_1 = require("../service/authenticator.service");
const usuarios_service_1 = require("../service/usuarios.service");
let AuthenticatorController = class AuthenticatorController {
    constructor(authenticatorService, usuariosService) {
        this.authenticatorService = authenticatorService;
        this.usuariosService = usuariosService;
    }
    async criarNovoCliente(req) {
        try {
            return await this.usuariosService.createUsuarioCliente(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async novaSenhaUsuarioEmail(email) {
        try {
            return await this.usuariosService.forgotPassword(email);
        }
        catch (error) {
            return error;
        }
    }
    async validaTokenSenha(code) {
        try {
            return await this.usuariosService.verifyTokenRecoverPassword(code);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)('criar-usuario-cliente'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticatorController.prototype, "criarNovoCliente", null);
__decorate([
    (0, common_1.Get)('novasenha/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticatorController.prototype, "novaSenhaUsuarioEmail", null);
__decorate([
    (0, common_1.Get)('valida-code/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticatorController.prototype, "validaTokenSenha", null);
AuthenticatorController = __decorate([
    (0, common_1.Controller)('api/authenticator'),
    __metadata("design:paramtypes", [authenticator_service_1.AuthenticatorService,
        usuarios_service_1.UsuariosService])
], AuthenticatorController);
exports.AuthenticatorController = AuthenticatorController;
//# sourceMappingURL=authenticator.controller.js.map