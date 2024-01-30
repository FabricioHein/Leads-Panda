"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContatosModule = void 0;
const common_1 = require("@nestjs/common");
const contatos_service_1 = require("../service/contatos.service");
const contatos_controllers_1 = require("../controllers/contatos.controllers");
const contatos_repository_1 = require("../repositories/contatos.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
let ContatosModule = class ContatosModule {
};
ContatosModule = __decorate([
    (0, common_1.Module)({
        controllers: [contatos_controllers_1.ContatosController],
        providers: [contatos_repository_1.ContatosRepository, contatos_service_1.ContatosService, PrismaService_1.PrismaService],
    })
], ContatosModule);
exports.ContatosModule = ContatosModule;
//# sourceMappingURL=contatos.module.js.map