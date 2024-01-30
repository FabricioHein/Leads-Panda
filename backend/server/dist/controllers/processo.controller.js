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
exports.ProcessoController = void 0;
const common_1 = require("@nestjs/common");
const processo_service_1 = require("../service/processo.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ProcessoController = class ProcessoController {
    constructor(processoService) {
        this.processoService = processoService;
    }
    async getAllProcesso(id, req) {
        try {
            return await this.processoService.getAllProcesso(Number(id));
        }
        catch (error) {
            return error;
        }
    }
    async deleteProcesso(req) {
        try {
            return await this.processoService.deleteProcesso(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createProcesso(req) {
        try {
            return await this.processoService.createProcesso(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarProcesso(req) {
        try {
            return await this.processoService.atualizarProcesso(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProcessoController.prototype, "getAllProcesso", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProcessoController.prototype, "deleteProcesso", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProcessoController.prototype, "createProcesso", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProcessoController.prototype, "atualizarProcesso", null);
ProcessoController = __decorate([
    (0, common_1.Controller)('api/processo'),
    __metadata("design:paramtypes", [processo_service_1.ProcessoService])
], ProcessoController);
exports.ProcessoController = ProcessoController;
//# sourceMappingURL=processo.controller.js.map