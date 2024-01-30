"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioAskModule = void 0;
const common_1 = require("@nestjs/common");
const formulario_service_1 = require("../service/formulario.service");
const formulario_ask_controller_1 = require("../controllers/formulario-ask.controller");
const formulario_dinamico_repository_1 = require("../repositories/formulario-dinamico.repository");
const formulario_ask_repository_1 = require("../repositories/formulario-ask.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const task_repository_1 = require("../repositories/task.repository");
let FormularioAskModule = class FormularioAskModule {
};
FormularioAskModule = __decorate([
    (0, common_1.Module)({
        controllers: [formulario_ask_controller_1.FormularioAskController],
        providers: [
            formulario_service_1.FormularioService,
            formulario_dinamico_repository_1.FormularioDinamicoRepository,
            formulario_ask_repository_1.FormularioAskRepository,
            PrismaService_1.PrismaService,
            task_repository_1.TaskRepository,
        ],
    })
], FormularioAskModule);
exports.FormularioAskModule = FormularioAskModule;
//# sourceMappingURL=formulario-ask.module.js.map