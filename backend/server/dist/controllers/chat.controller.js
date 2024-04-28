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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("../service/chat.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async getAllChatInfo(clienteId) {
        try {
            return await this.chatService.getAllChatInfo(clienteId);
        }
        catch (error) {
            return error;
        }
    }
    async getChatInfo(uuid) {
        try {
            return await this.chatService.getChatInfoByUuid(uuid);
        }
        catch (error) {
            return error;
        }
    }
    async deletechatInfo(req) {
        try {
            return await this.chatService.deletechatInfo(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createchatInfo(req) {
        try {
            return await this.chatService.createchatInfo(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async updatechatInfo(req) {
        try {
            return await this.chatService.updatechatInfo(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getAllChatOpen(clienteId) {
        try {
            return await this.chatService.getAllChatOpen(clienteId);
        }
        catch (error) {
            return error;
        }
    }
    async getAllChatClose(clienteId) {
        try {
            return await this.chatService.getAllChatClose(clienteId);
        }
        catch (error) {
            return error;
        }
    }
    async getChatByUuid(uuid) {
        try {
            return await this.chatService.updatechatInfo(uuid);
        }
        catch (error) {
            return error;
        }
    }
    async getAllChatMsgm(chatId) {
        try {
            return await this.chatService.getAllChatMsgm(chatId);
        }
        catch (error) {
            return error;
        }
    }
    async deleteChat(req) {
        try {
            return await this.chatService.deleteChat(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createChat(req) {
        try {
            return await this.chatService.createChat(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarChat(req) {
        try {
            return await this.chatService.atualizarChat(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async newMessages(req) {
        try {
            return await this.chatService.createMessages(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getChatInfoData(uuid) {
        try {
            return await this.chatService.getChatInfoByUuidCliente(uuid);
        }
        catch (error) {
            return error;
        }
    }
    async getChaByUuid(uuid) {
        try {
            return await this.chatService.getChaByUuid(uuid);
        }
        catch (error) {
            return error;
        }
    }
    async getByChatUuidMessages(uuid) {
        try {
            return await this.chatService.updatechatInfo(uuid);
        }
        catch (error) {
            return error;
        }
    }
    async createMessages(req) {
        try {
            return await this.chatService.createMessages(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async novoChat(req) {
        try {
            return await this.chatService.novoChat(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getByChatUuidMessagesLast(uuid) {
        try {
            return await this.chatService.getByChatUuidMessagesLast(uuid);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/getAllChatInfo/:clienteId'),
    __param(0, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAllChatInfo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/getChatInfo/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChatInfo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('deletechatInfo'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deletechatInfo", null);
__decorate([
    (0, common_1.Post)('createchatInfo'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createchatInfo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('updatechatInfo'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "updatechatInfo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/open/:clienteId'),
    __param(0, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAllChatOpen", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/close/:clienteId'),
    __param(0, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAllChatClose", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('updatechatInfo/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChatByUuid", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('chatAllMsg/:chatId'),
    __param(0, (0, common_1.Param)('chatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAllChatMsgm", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteChat", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createChat", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "atualizarChat", null);
__decorate([
    (0, common_1.Post)('newMessages'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "newMessages", null);
__decorate([
    (0, common_1.Get)('/get-info-chat/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChatInfoData", null);
__decorate([
    (0, common_1.Get)('/getChat/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChaByUuid", null);
__decorate([
    (0, common_1.Get)('updatechatInfo/uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getByChatUuidMessages", null);
__decorate([
    (0, common_1.Post)('createMessages'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createMessages", null);
__decorate([
    (0, common_1.Post)('novoChat'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "novoChat", null);
__decorate([
    (0, common_1.Get)('getByChatUuidMessagesLast/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getByChatUuidMessagesLast", null);
ChatController = __decorate([
    (0, common_1.Controller)('api/chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map