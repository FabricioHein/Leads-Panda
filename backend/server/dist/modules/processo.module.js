"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoModule = void 0;
const common_1 = require("@nestjs/common");
const processo_service_1 = require("../service/processo.service");
const processo_controller_1 = require("../controllers/processo.controller");
const processo_repository_1 = require("../repositories/processo.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const task_repository_1 = require("../repositories/task.repository");
let ProcessoModule = class ProcessoModule {
};
ProcessoModule = __decorate([
    (0, common_1.Module)({
        controllers: [processo_controller_1.ProcessoController],
        providers: [
            task_repository_1.TaskRepository,
            processo_repository_1.ProcessoRepository,
            processo_service_1.ProcessoService,
            PrismaService_1.PrismaService,
        ],
    })
], ProcessoModule);
exports.ProcessoModule = ProcessoModule;
//# sourceMappingURL=processo.module.js.map