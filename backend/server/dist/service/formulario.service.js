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
exports.FormularioService = void 0;
const common_1 = require("@nestjs/common");
const formulario_dinamico_repository_1 = require("../repositories/formulario-dinamico.repository");
const formulario_ask_repository_1 = require("../repositories/formulario-ask.repository");
const task_repository_1 = require("../repositories/task.repository");
const msg_response_1 = require("../utils/msg.response");
let FormularioService = class FormularioService {
    constructor(taskRepository, formularioDinamicoRepository, formularioAskRepository) {
        this.taskRepository = taskRepository;
        this.formularioDinamicoRepository = formularioDinamicoRepository;
        this.formularioAskRepository = formularioAskRepository;
    }
    async atualizarFormularioDinamico(data) {
        try {
            const { id } = data;
            const dataFormularioDinamico = data;
            return await this.formularioDinamicoRepository.updateFormularioDinamico(Number(id), dataFormularioDinamico);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllFormularioDinamico(empresa_configId) {
        try {
            return await this.formularioDinamicoRepository.getFormularioDinamicoAll(Number(empresa_configId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createFormularioDinamico(data) {
        try {
            return await this.formularioDinamicoRepository.createFormularioDinamico(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteFormularioDinamico(data) {
        try {
            const id = data.id;
            return await this.formularioDinamicoRepository.deleteFormularioDinamico(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async updateFormularioAsk(data) {
        try {
            const { id } = data;
            const dataFormularioDinamico = data;
            return await this.formularioAskRepository.updateFormularioAsk(Number(id), dataFormularioDinamico);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByURLFormularioDinamico(url) {
        try {
            return await this.formularioDinamicoRepository.getByURLFormularioDinamico(url);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByURLFormularioDinamicoOpen(url) {
        try {
            const params = url;
            const form = await this.formularioDinamicoRepository.getByURLFormularioDinamicoOpen(params);
            if (form && form.publico) {
                return Object.assign(Object.assign({}, form), { form: true });
            }
            return {
                form: false,
            };
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByIdFormularioAsk(empresa_configId) {
        try {
            return await this.formularioAskRepository.getByIdFormularioAsk(Number(empresa_configId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createFormularioAsk(data) {
        try {
            const novoForm = {
                formulario_dinamicoId: Number(data.formulario_dinamicoId),
                json: data.json,
            };
            let dataJson = data.json.map((i) => {
                return i.value;
            });
            if (data.processoId) {
                let numero = Math.random() + 100;
                let titulo = 'Formulários #' + numero;
                await this.taskRepository.createTask({
                    processoId: Number(data.processoId),
                    title: titulo,
                    description: dataJson.toString(),
                });
            }
            return await this.formularioAskRepository.createFormularioAsk(novoForm);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteFormularioAsk(data) {
        try {
            const id = data.id;
            return await this.formularioAskRepository.deleteFormularioAsk(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
FormularioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository,
        formulario_dinamico_repository_1.FormularioDinamicoRepository,
        formulario_ask_repository_1.FormularioAskRepository])
], FormularioService);
exports.FormularioService = FormularioService;
//# sourceMappingURL=formulario.service.js.map