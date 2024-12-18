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
exports.ChatRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ChatRepository = class ChatRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async countChatsByEmpresaNaoAtivo(empresa_configId) {
        const count = await this.prisma.chat.count({
            where: {
                AND: [
                    {
                        empresa_configId: empresa_configId,
                    },
                    {
                        data_close: {
                            not: null
                        }
                    }
                ]
            },
        });
        return count;
    }
    async countChatsByEmpresaAtivo(empresa_configId) {
        const count = await this.prisma.chat.count({
            where: {
                AND: [
                    {
                        empresa_configId: empresa_configId,
                    },
                    {
                        data_close: null
                    }
                ]
            },
        });
        return count;
    }
    async getChatByTelefoneByUuidInfoChat(chat_telefone, uuid_chat_info) {
        return await this.prisma.chat.findMany({
            where: {
                AND: [
                    {
                        telefone: chat_telefone,
                    },
                    {
                        chat_info: {
                            uuid: uuid_chat_info
                        }
                    }
                ]
            }
        });
    }
    async getChatAll(clienteId) {
        return await this.prisma.chat.findMany({
            where: {
                empresa_configId: clienteId,
            },
            include: {
                chat_info: {
                    select: {
                        uuid: true,
                    },
                },
            },
        });
    }
    async getChatTelefoneEmail(email, telefone) {
        return await this.prisma.chat.findFirst({
            where: {
                AND: [
                    {
                        email: email
                    },
                    {
                        telefone: telefone
                    }
                ]
            },
            include: {
                messages: {
                    orderBy: {
                        created_at: 'asc'
                    }
                },
                chat_info: {
                    select: {
                        uuid: true,
                    },
                },
            },
        });
    }
    async getAllChatClose(clienteId) {
        return await this.prisma.chat.findMany({
            where: {
                empresa_configId: clienteId,
                chat_open: true,
            },
            include: {
                chat_info: {
                    select: {
                        uuid: true,
                        type: true
                    },
                },
            },
        });
    }
    async getAllChatOpen(clienteId) {
        return await this.prisma.chat.findMany({
            where: {
                empresa_configId: clienteId,
                chat_open: false,
            },
            include: {
                chat_info: {
                    select: {
                        uuid: true,
                        type: true
                    },
                },
            },
        });
    }
    async getByUiidChat(uuid) {
        return await this.prisma.chat.findFirst({
            where: {
                uuid: uuid
            },
        });
    }
    async getByIdChat(id) {
        return await this.prisma.chat.findFirst({
            where: {
                chat_id: id,
            },
        });
    }
    async createChat(data) {
        return await this.prisma.chat.create({
            data: data,
        });
    }
    async updateChat(id, data) {
        return await this.prisma.chat.update({
            where: {
                chat_id: id,
            },
            data: data,
        });
    }
    async deleteChat(id) {
        return await this.prisma.chat.delete({
            where: {
                chat_id: id,
            },
        });
    }
    async deleteChatChatInfo(id) {
        return await this.prisma.chat.deleteMany({
            where: {
                chat_info_id: id
            },
        });
    }
};
ChatRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ChatRepository);
exports.ChatRepository = ChatRepository;
//# sourceMappingURL=chat.repository.js.map