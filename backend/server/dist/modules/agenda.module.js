"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaModule = void 0;
const common_1 = require("@nestjs/common");
const agenda_service_1 = require("../service/agenda.service");
const agenda_controller_1 = require("../controllers/agenda.controller");
const agenda_repository_1 = require("../repositories/agenda.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const task_repository_1 = require("../repositories/task.repository");
const clientes_repository_1 = require("../repositories/clientes.repository");
const usuario_repository_1 = require("../repositories/usuario.repository");
let AgendaModule = class AgendaModule {
};
AgendaModule = __decorate([
    (0, common_1.Module)({
        controllers: [agenda_controller_1.AgendaController],
        providers: [task_repository_1.TaskRepository, clientes_repository_1.ClientesRepository, usuario_repository_1.UsuarioRepository, agenda_repository_1.AgendaRepository, agenda_service_1.AgendaService, PrismaService_1.PrismaService],
    })
], AgendaModule);
exports.AgendaModule = AgendaModule;
//# sourceMappingURL=agenda.module.js.map