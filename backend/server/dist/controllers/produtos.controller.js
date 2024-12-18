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
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produtos_service_1 = require("../service/produtos.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ProdutosController = class ProdutosController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    async getAllProduto(empresa_configId) {
        try {
            return await this.produtoService.getAllProduto(empresa_configId);
        }
        catch (error) {
            return error;
        }
    }
    async deleteProduto(req) {
        try {
            return await this.produtoService.deleteProduto(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async imageProduto(req) {
        try {
            return await this.produtoService.imageProduto(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createProduto(req) {
        try {
            return await this.produtoService.createProduto(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarProduto(req) {
        try {
            return await this.produtoService.atualizarProduto(req.body);
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
], ProdutosController.prototype, "getAllProduto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "deleteProduto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('imageProduto'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "imageProduto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "createProduto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "atualizarProduto", null);
ProdutosController = __decorate([
    (0, common_1.Controller)('api/produto'),
    __metadata("design:paramtypes", [produtos_service_1.ProdutoService])
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=produtos.controller.js.map