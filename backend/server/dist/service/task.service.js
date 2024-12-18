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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("../repositories/task.repository");
const data_helper_1 = require("../helper/data.helper");
const tasksub_repository_1 = require("../repositories/tasksub.repository");
const anotacoes_repository_1 = require("../repositories/anotacoes.repository");
const arquivos_repository_1 = require("../repositories/arquivos.repository");
const motivos_repository_1 = require("../repositories/motivos.repository");
const logTask_repositoy_1 = require("../repositories/logTask.repositoy");
const msg_response_1 = require("../utils/msg.response");
let TaskService = class TaskService {
    constructor(anotacaoRepository, taskRepositorio, taskSubRepository, arquivosRepository, motivosRepository, logTasksRepository) {
        this.anotacaoRepository = anotacaoRepository;
        this.taskRepositorio = taskRepositorio;
        this.taskSubRepository = taskSubRepository;
        this.arquivosRepository = arquivosRepository;
        this.motivosRepository = motivosRepository;
        this.logTasksRepository = logTasksRepository;
    }
    async historicoTask(data) {
        return await this.logTasksRepository.createLogTasks(data);
    }
    async getByIdMotivos(id) {
        try {
            return await this.anotacaoRepository.getAnotacaoAll(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllMotivos(id) {
        try {
            return await this.motivosRepository.getMotivosAll(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createMotivos(data) {
        try {
            return await this.motivosRepository.createMotivos(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteMotivos(data) {
        try {
            const id = data.id;
            return await this.motivosRepository.deleteMotivos(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarMotivos(data) {
        try {
            const { id } = data;
            const dataTask = data;
            return await this.motivosRepository.updateMotivos(Number(id), dataTask);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarTask(data) {
        try {
            const { id } = data;
            const dataTask = data;
            return await this.taskRepositorio.updateTask(Number(id), dataTask);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarAnotacao(data) {
        try {
            const { id } = data;
            const dataAnotacao = data;
            return await this.anotacaoRepository.updateAnotacao(Number(id), dataAnotacao);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarTaskSub(data) {
        try {
            const { id } = data;
            const dataTask = data;
            const taskSub = await this.taskSubRepository.updateTaskSub(Number(id), dataTask);
            if (taskSub) {
                ;
                return taskSub;
            }
            ;
            return (0, msg_response_1.ErroBadRequest)('Not Found');
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByIdTask(id) {
        try {
            const task = await this.taskRepositorio.getByIdTask(Number(id));
            task.previsao_fechamento = data_helper_1.DateTime.ToFormat(task.previsao_fechamento, 'YYYY-MM-DD');
            return task;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllTask() {
        try {
            return await this.taskRepositorio.getTaskAll();
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createTask(data) {
        try {
            return await this.taskRepositorio.createTask(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getTaskAnexos(data) {
        try {
            return await this.arquivosRepository.createArquivos(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteTask(data) {
        try {
            const id = data.id;
            return await this.taskRepositorio.deleteTask(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteTaskAnexos(data) {
        try {
            const id = data.id;
            return await this.arquivosRepository.deleteArquivos(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteTaskSub(data) {
        try {
            const id = data.id;
            return await this.taskSubRepository.deleteTaskSub(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllTaskSubtask(taskId) {
        try {
            const subTasks = await this.taskSubRepository.getTaskSubAllTaskId(Number(taskId));
            return subTasks.map((s) => {
                return {
                    id: s.id,
                    title: s.title,
                    description: s.description,
                    priority: s.priority,
                    description_text: s.description_text,
                    status: s.status,
                    taskId: s.taskId,
                    date_end: data_helper_1.DateTime.formatToHoraMin(s.date_end),
                    date_start: data_helper_1.DateTime.formatToHoraMin(s.date_start),
                };
            });
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createTaskSub(data) {
        try {
            return await this.taskSubRepository.createTaskSub(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAnotacaoAllId(id) {
        try {
            return await this.anotacaoRepository.getAnotacaoAll(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteAnotacao(data) {
        try {
            const id = data.id;
            return await this.anotacaoRepository.deleteAnotacao(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllAnotacao(taskId) {
        try {
            return await this.anotacaoRepository.getAnotacaoAll(Number(taskId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createAnotacao(data) {
        try {
            return await this.anotacaoRepository.createAnotacao(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getVisaoGeralTaskSub(data, clientId) {
        try {
            const filter = {
                task: {
                    processo: {
                        projeto: {
                            empresa_configId: Number(clientId),
                        },
                    },
                },
                AND: [],
            };
            console.log(data);
            if (data.dataInicio && !data.dataFinal) {
                filter.AND.push({
                    date_start: new Date(data.dataInicio),
                });
            }
            if (!data.dataInicio && data.dataFinal) {
                filter.AND.push({
                    date_end: new Date(data.dataFinal),
                });
            }
            if (data.dataInicio && data.dataFinal) {
                let dataArr = data_helper_1.DateTime.getListadeData(data.dataFinal, data.dataFinal);
                console.log(dataArr);
            }
            if (data.status) {
                filter.AND.push({
                    status: data.status,
                });
            }
            const filtro = await this.taskSubRepository.getVisaoGeralTaskSub(filter);
            return filtro.map((f) => {
                return {
                    date_end: data_helper_1.DateTime.DateToString(f.date_end),
                    date_start: data_helper_1.DateTime.DateToString(f.date_start),
                    status: f.status,
                    title: f.title,
                    priority: f.priority,
                    id: f.id,
                    name: f.task.title,
                    taskId: f.task.id,
                };
            });
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getVisaoGeralTask(data, clientId) {
        try {
            const filter = {
                processo: {
                    projeto: {
                        empresa_configId: Number(clientId),
                    },
                },
                AND: [],
            };
            if (data.temperatura) {
                filter.AND.push({
                    status: data.temperatura,
                });
            }
            if (data.projeto) {
                filter.AND.push({
                    processo: {
                        projeto: {
                            id: Number(data.projeto),
                        },
                    },
                });
            }
            if (data.previsao) {
                filter.AND.push({
                    previsao_fechamento: new Date(data.previsao),
                });
            }
            if (data.motivos) {
                filter.AND.push({
                    motivosId: Number(data.motivos),
                });
            }
            if (data.vendedor) {
                filter.AND.push({
                    usersId: Number(data.vendedor),
                });
            }
            if (data.vendedor) {
                filter.AND.push({
                    usersId: Number(data.vendedor),
                });
            }
            if (data.produto) {
                filter.AND.push({
                    produtoId: Number(data.produto),
                });
            }
            const visaoGeralTask = await this.taskRepositorio.getVisaoGeralTask(filter);
            return visaoGeralTask;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [anotacoes_repository_1.AnotacaoRepository,
        task_repository_1.TaskRepository,
        tasksub_repository_1.TaskSubRepository,
        arquivos_repository_1.ArquivosRepository,
        motivos_repository_1.MotivosRepository,
        logTask_repositoy_1.LogTasksRepository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map