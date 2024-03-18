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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const chat_repository_1 = require("../repositories/chat.repository");
const chat_info_repository_1 = require("../repositories/chat-info.repository");
const messagen_repository_1 = require("../repositories/messagen.repository");
const msg_response_1 = require("../utils/msg.response");
let ChatService = class ChatService {
    constructor(messagesRepository, chatRepository, chatInfoRepository) {
        this.messagesRepository = messagesRepository;
        this.chatRepository = chatRepository;
        this.chatInfoRepository = chatInfoRepository;
    }
    async getChatInfoByUuid(uuid) {
        try {
            return await this.chatInfoRepository.getByUuidChatInfo(uuid);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async updatechatInfo(data) {
        try {
            const { chat_info_id } = data;
            const chatInfo = data;
            return await this.chatInfoRepository.updateChatInfo(Number(chat_info_id), chatInfo);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllChatInfo(clienteId) {
        try {
            return this.deleteToken(await this.chatInfoRepository.getChatInfoAll(Number(clienteId)));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByIdchatInfo(clienteId) {
        try {
            return this.deleteToken(await this.chatInfoRepository.getByIdChatInfo(Number(clienteId)));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createchatInfo(data) {
        try {
            const chatInfoHas = await this.chatInfoRepository.getChatInfoAllType(data.cliente_id, data.type);
            if (!chatInfoHas) {
                return await this.chatInfoRepository.createChatInfo(data);
            }
            return {
                msg: 'Já Existe Um Chat com Esse Tipo'
            };
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deletechatInfo(data) {
        try {
            const id = data.chat_info_id;
            return await this.chatInfoRepository.deleteChatInfo(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getChatInfoByUuidCliente(uuid) {
        try {
            const getChat = await this.chatInfoRepository.getByUuidChatInfo(uuid);
            if (getChat) {
                return getChat;
            }
            return (0, msg_response_1.ErroBadRequest)('error');
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllChatMsgm(chatId) {
        try {
            return await this.messagesRepository.getAllChatMsgm(Number(chatId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByChatUuidMessages(uuid) {
        try {
            return await this.messagesRepository.getByChatUuidMessages(uuid);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByChatUuidMessagesLast(uuid) {
        try {
            return await this.messagesRepository.getByChatUuidMessagesLast(uuid);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createMessages(data) {
        try {
            const chatHas = this.getChatInfoByUuid(data.uuid);
            if (chatHas) {
                delete data['uuid'];
                return await this.messagesRepository.createMessages(data);
            }
            console.log(data);
            return (0, msg_response_1.ErroBadRequest)('Não Existe o Chat');
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getChaByUuid(uuid) {
        try {
            const chat = await this.chatRepository.getByUiidChat(uuid);
            if (chat) {
                return chat;
            }
            return null;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarChat(data) {
        try {
            const { id } = data;
            const dataChat = data;
            return await this.chatRepository.updateChat(Number(id), dataChat);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllChatOpen(clienteId) {
        try {
            return await this.chatRepository.getAllChatOpen(Number(clienteId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllChatClose(clienteId) {
        try {
            return await this.chatRepository.getAllChatClose(Number(clienteId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createChat(data) {
        try {
            return await this.chatRepository.createChat(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getMessages(data) {
    }
    async novoChat(data) {
        try {
            const chat = data;
            const chatInfo = await this.chatInfoRepository.getChatInfoAll(Number(chat.cliente_id));
            if (chatInfo && chat.telefone && chat.email) {
                const telefone = await await this.chatRepository.getChatTelefone(chat.telefone);
                if (!telefone) {
                    return await this.chatRepository.createChat(data);
                }
                return telefone;
            }
            return (0, msg_response_1.ErroBadRequest)('não encontrado chat');
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteChat(data) {
        try {
            const id = data.id;
            return await this.chatRepository.deleteChat(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteToken(data) {
        try {
            delete data['key_chatgpt'];
            delete data['organization_chatgpt'];
            delete data['key_facebook'];
            delete data['token_whatsapp'];
            delete data['app_secret_whatsapp'];
            delete data['wa_id_numero_telefone'];
            return data;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [messagen_repository_1.MessagesRepository,
        chat_repository_1.ChatRepository,
        chat_info_repository_1.ChatInfoRepository])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map