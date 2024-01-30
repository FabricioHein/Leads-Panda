"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoModule = void 0;
const common_1 = require("@nestjs/common");
const servicos_service_1 = require("../service/servicos.service");
const servicos_controllers_1 = require("../controllers/servicos.controllers");
const servicos_repository_1 = require("../repositories/servicos.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
let ProdutoModule = class ProdutoModule {
};
ProdutoModule = __decorate([
    (0, common_1.Module)({
        controllers: [servicos_controllers_1.ServicoController],
        providers: [servicos_repository_1.ServicoRepository, servicos_service_1.ServicoService, PrismaService_1.PrismaService],
    })
], ProdutoModule);
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=service.module.js.map