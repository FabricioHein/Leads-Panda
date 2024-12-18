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
exports.PageLinkController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const pageLink_service_1 = require("../service/pageLink.service");
let PageLinkController = class PageLinkController {
    constructor(pageLinkService) {
        this.pageLinkService = pageLinkService;
    }
    async getAllPageLink(empresa_configId) {
        try {
            return await this.pageLinkService.getAllPageLink(empresa_configId);
        }
        catch (error) {
            return error;
        }
    }
    async getNomeLInkExiste(nome_link) {
        try {
            return await this.pageLinkService.getNomeLInkExiste(nome_link);
        }
        catch (error) {
            return error;
        }
    }
    async getPageLinkById(id) {
        try {
            return await this.pageLinkService.getPageLinkById(id);
        }
        catch (error) {
            return error;
        }
    }
    async getPageLinkByNome_link(name) {
        try {
            return await this.pageLinkService.getPageLinkByNome_link(name);
        }
        catch (error) {
            return error;
        }
    }
    async deletePageLink(req) {
        try {
            return await this.pageLinkService.deletePageLink(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createPageLink(req) {
        try {
            return await this.pageLinkService.createPageLink(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarPageLink(req) {
        try {
            return await this.pageLinkService.atualizarPageLink(req.body);
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
], PageLinkController.prototype, "getAllPageLink", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('get-nome-existe-link/:nome_link'),
    __param(0, (0, common_1.Param)('nome_link')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PageLinkController.prototype, "getNomeLInkExiste", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getlink/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PageLinkController.prototype, "getPageLinkById", null);
__decorate([
    (0, common_1.Get)('getlink-company/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PageLinkController.prototype, "getPageLinkByNome_link", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PageLinkController.prototype, "deletePageLink", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PageLinkController.prototype, "createPageLink", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PageLinkController.prototype, "atualizarPageLink", null);
PageLinkController = __decorate([
    (0, common_1.Controller)('api/pageLink'),
    __metadata("design:paramtypes", [pageLink_service_1.PageLinkService])
], PageLinkController);
exports.PageLinkController = PageLinkController;
//# sourceMappingURL=pageLink.controller.js.map