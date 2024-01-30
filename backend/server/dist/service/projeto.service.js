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
exports.ProjetoService = void 0;
const common_1 = require("@nestjs/common");
const projeto_repository_1 = require("../repositories/projeto.repository");
const task_repository_1 = require("../repositories/task.repository");
const msg_response_1 = require("../utils/msg.response");
let ProjetoService = class ProjetoService {
    constructor(projetoRepository, taskRepository) {
        this.projetoRepository = projetoRepository;
        this.taskRepository = taskRepository;
    }
    async atualizarProjeto(data) {
        try {
            const { id } = data;
            const dataProjeto = data;
            return await this.projetoRepository.updateProjeto(Number(id), dataProjeto);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllProjeto(id) {
        try {
            return await this.projetoRepository.getProjetoAll(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllProjetoById(id) {
        try {
            return await this.projetoRepository.getByIdProjetoEtapa(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createProjeto(data) {
        try {
            return await this.projetoRepository.createProjeto(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteProjeto(data) {
        try {
            const id = data.id;
            await this.taskRepository.deleteManyTaskProcesso(id);
            return await this.projetoRepository.deleteProjeto(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ProjetoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [projeto_repository_1.ProjetoRepository,
        task_repository_1.TaskRepository])
], ProjetoService);
exports.ProjetoService = ProjetoService;
//# sourceMappingURL=projeto.service.js.map