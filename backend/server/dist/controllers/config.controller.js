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
exports.ConfigController = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../service/config.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ConfigController = class ConfigController {
    constructor(configService) {
        this.configService = configService;
    }
    async atualizarConfig(req) {
        return await this.configService.atualizarConfig(req.body);
    }
    async getDashboard(empresa_configId) {
        try {
            return await this.configService.getDashboard(empresa_configId);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "atualizarConfig", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('dashboard/:empresa_configId'),
    __param(0, (0, common_1.Param)('empresa_configId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "getDashboard", null);
ConfigController = __decorate([
    (0, common_1.Controller)('api/config'),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], ConfigController);
exports.ConfigController = ConfigController;
//# sourceMappingURL=config.controller.js.map