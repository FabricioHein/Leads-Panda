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
exports.FormularioAskController = void 0;
const formulario_service_1 = require("../service/formulario.service");
const common_1 = require("@nestjs/common");
let FormularioAskController = class FormularioAskController {
    constructor(formularioAskService) {
        this.formularioAskService = formularioAskService;
    }
    async getByURLFormularioDinamicoOpen(url) {
        try {
            return await this.formularioAskService.getByURLFormularioDinamicoOpen(url);
        }
        catch (error) {
            return error;
        }
    }
    async createFormularioAskDinamico(req) {
        try {
            return await this.formularioAskService.createFormularioAsk(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Get)('form/:url'),
    __param(0, (0, common_1.Param)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioAskController.prototype, "getByURLFormularioDinamicoOpen", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormularioAskController.prototype, "createFormularioAskDinamico", null);
FormularioAskController = __decorate([
    (0, common_1.Controller)('api/formulario-ask-form'),
    __metadata("design:paramtypes", [formulario_service_1.FormularioService])
], FormularioAskController);
exports.FormularioAskController = FormularioAskController;
//# sourceMappingURL=formulario-ask.controller.js.map