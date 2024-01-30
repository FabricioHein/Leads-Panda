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
exports.FornecedorsController = void 0;
const common_1 = require("@nestjs/common");
const fornecedores_service_1 = require("../service/fornecedores.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let FornecedorsController = class FornecedorsController {
    constructor(fornecedorService) {
        this.fornecedorService = fornecedorService;
    }
    async getAllFornecedor() {
        try {
            return await this.fornecedorService.getAllFornecedor();
        }
        catch (error) {
            return error;
        }
    }
    async deleteFornecedor(req) {
        try {
            return await this.fornecedorService.deleteFornecedor(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createFornecedor(req) {
        try {
            return await this.fornecedorService.createFornecedor(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarFornecedor(req) {
        try {
            return await this.fornecedorService.atualizarFornecedor(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FornecedorsController.prototype, "getAllFornecedor", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FornecedorsController.prototype, "deleteFornecedor", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FornecedorsController.prototype, "createFornecedor", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FornecedorsController.prototype, "atualizarFornecedor", null);
FornecedorsController = __decorate([
    (0, common_1.Controller)('api/fornecedor'),
    __metadata("design:paramtypes", [fornecedores_service_1.FornecedorService])
], FornecedorsController);
exports.FornecedorsController = FornecedorsController;
//# sourceMappingURL=fornecedores.controllers.js.map