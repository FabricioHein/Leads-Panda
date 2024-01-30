"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("../service/task.service");
const task_controllers_1 = require("../controllers/task.controllers");
const task_repository_1 = require("../repositories/task.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const tasksub_repository_1 = require("../repositories/tasksub.repository");
const anotacoes_repository_1 = require("../repositories/anotacoes.repository");
const arquivos_repository_1 = require("../repositories/arquivos.repository");
const venda_repository_1 = require("../repositories/venda.repository");
const motivos_repository_1 = require("../repositories/motivos.repository");
const logTask_repositoy_1 = require("../repositories/logTask.repositoy");
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    (0, common_1.Module)({
        controllers: [task_controllers_1.TaskController],
        providers: [
            task_repository_1.TaskRepository,
            task_service_1.TaskService,
            PrismaService_1.PrismaService,
            tasksub_repository_1.TaskSubRepository,
            anotacoes_repository_1.AnotacaoRepository,
            arquivos_repository_1.ArquivosRepository,
            venda_repository_1.VendaRepository,
            motivos_repository_1.MotivosRepository,
            logTask_repositoy_1.LogTasksRepository,
        ],
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map