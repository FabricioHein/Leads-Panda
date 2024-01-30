"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorModule = void 0;
const common_1 = require("@nestjs/common");
const fornecedores_service_1 = require("../service/fornecedores.service");
const fornecedores_controllers_1 = require("../controllers/fornecedores.controllers");
const fornecedor_repository_1 = require("../repositories/fornecedor.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
let FornecedorModule = class FornecedorModule {
};
FornecedorModule = __decorate([
    (0, common_1.Module)({
        controllers: [fornecedores_controllers_1.FornecedorsController],
        providers: [fornecedor_repository_1.FornecedorRepository, fornecedores_service_1.FornecedorService, PrismaService_1.PrismaService],
    })
], FornecedorModule);
exports.FornecedorModule = FornecedorModule;
//# sourceMappingURL=fornecedores.module.js.map