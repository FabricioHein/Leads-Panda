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
const produtos_service_1 = require("../service/produtos.service");
const produtos_controller_1 = require("../controllers/produtos.controller");
const produtos_repository_1 = require("../repositories/produtos.repository");
const file_helper_1 = require("../helper/file.helper");
const PrismaService_1 = require("../base/relacional/PrismaService");
let ProdutoModule = class ProdutoModule {
};
ProdutoModule = __decorate([
    (0, common_1.Module)({
        controllers: [produtos_controller_1.ProdutosController],
        providers: [produtos_repository_1.ProdutoRepository, produtos_service_1.ProdutoService, PrismaService_1.PrismaService, file_helper_1.FileHelper],
    })
], ProdutoModule);
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=produtos.module.js.map