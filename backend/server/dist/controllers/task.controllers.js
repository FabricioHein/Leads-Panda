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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("../service/task.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getAllTask() {
        try {
            return await this.taskService.getAllTask();
        }
        catch (error) {
            return error;
        }
    }
    async getByIdTask(id, req) {
        try {
            return await this.taskService.getByIdTask(id);
        }
        catch (error) {
            return error;
        }
    }
    async deleteTask(req) {
        try {
            return await this.taskService.deleteTask(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createTask(req) {
        try {
            return await this.taskService.createTask(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getAllTaskSubtask(id, req) {
        try {
            return await this.taskService.getAllTaskSubtask(id);
        }
        catch (error) {
            return error;
        }
    }
    async getTaskAnexos(req) {
        try {
            return await this.taskService.getTaskAnexos(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async deleteTaskAnexos(req) {
        try {
            return await this.taskService.deleteTaskAnexos(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async deleteTaskSub(req) {
        try {
            return await this.taskService.deleteTaskSub(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarTask(req) {
        try {
            return await this.taskService.atualizarTask(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createTaskSub(req) {
        try {
            return await this.taskService.createTaskSub(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createAnotacao(req) {
        try {
            return await this.taskService.createAnotacao(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getVisaoGeralTaskSub(clientId, req) {
        try {
            return await this.taskService.getVisaoGeralTaskSub(req.body, clientId);
        }
        catch (error) {
            return error;
        }
    }
    async getVisaoGeralTask(clientId, req) {
        try {
            return await this.taskService.getVisaoGeralTask(req.body, clientId);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarAnotacao(req) {
        try {
            return await this.taskService.atualizarAnotacao(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarTaskSub(req) {
        try {
            return await this.taskService.atualizarTaskSub(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async deleteAnotacao(req) {
        try {
            return await this.taskService.deleteAnotacao(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getAllAnotacao(id, req) {
        try {
            return await this.taskService.getAllAnotacao(id);
        }
        catch (error) {
            return error;
        }
    }
    async getAllMotivos(empresa_configId, req) {
        try {
            return await this.taskService.getAllMotivos(empresa_configId);
        }
        catch (error) {
            return error;
        }
    }
    async getByIdMotivos(id, req) {
        try {
            return await this.taskService.getByIdMotivos(id);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarMotivos(req) {
        try {
            return await this.taskService.atualizarMotivos(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createMotivos(req) {
        try {
            return await this.taskService.createMotivos(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async deleteMotivos(req) {
        try {
            return await this.taskService.deleteMotivos(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTask", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getByIdTask", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/subtask/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTaskSubtask", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('anexos'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskAnexos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete/deleteTaskAnexos'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTaskAnexos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete/deleteTaskSub'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTaskSub", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "atualizarTask", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('subtask'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTaskSub", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('anotacao'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createAnotacao", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('tasksubs/getVisaoGeralTaskSub/:clientId'),
    __param(0, (0, common_1.Param)('clientId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getVisaoGeralTaskSub", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('getVisaoGeralTask/:clientId'),
    __param(0, (0, common_1.Param)('clientId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getVisaoGeralTask", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('atualizarAnotacao'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "atualizarAnotacao", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('atualizarTaskSub'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "atualizarTaskSub", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete/deleteAnotacao'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteAnotacao", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/getAllAnotacao/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllAnotacao", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getAllMotivos/:empresa_configId'),
    __param(0, (0, common_1.Param)('empresa_configId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllMotivos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getByIdMotivos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getByIdMotivos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('atualizaMotivos'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "atualizarMotivos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('createMotivos'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createMotivos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete/motivos'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteMotivos", null);
TaskController = __decorate([
    (0, common_1.Controller)('api/task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controllers.js.map