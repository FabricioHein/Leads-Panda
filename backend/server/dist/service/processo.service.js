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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoService = void 0;
const common_1 = require("@nestjs/common");
const processo_repository_1 = require("../repositories/processo.repository");
const task_repository_1 = require("../repositories/task.repository");
const msg_response_1 = require("../utils/msg.response");
let ProcessoService = class ProcessoService {
    constructor(processoRepository, taskRepository) {
        this.processoRepository = processoRepository;
        this.taskRepository = taskRepository;
    }
    async atualizarProcesso(data) {
        try {
            const { id } = data;
            const dataProcesso = data;
            return await this.processoRepository.updateProcesso(Number(id), dataProcesso);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllProcesso(id) {
        try {
            return await this.processoRepository.getProcessoAll(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createProcesso(data) {
        try {
            return await this.processoRepository.createProcesso(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteProcesso(data) {
        try {
            const id = data.id;
            await this.taskRepository.deleteManyTaskProcesso(id);
            return await this.processoRepository.deleteProcesso(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ProcessoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [processo_repository_1.ProcessoRepository,
        task_repository_1.TaskRepository])
], ProcessoService);
exports.ProcessoService = ProcessoService;
//# sourceMappingURL=processo.service.js.map