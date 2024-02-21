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
exports.MessagesRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let MessagesRepository = class MessagesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllChatMsgm(id) {
        return await this.prisma.messages.findMany({
            where: {
                chat_id: id,
            },
            orderBy: {
                created_at: 'asc',
            },
        });
    }
    async getByChatUuidMessages(uuid) {
        return await this.prisma.messages.findMany({
            where: {
                chat: {
                    uuid: uuid
                }
            },
            orderBy: {
                created_at: 'asc',
            },
        });
    }
    async getByChatUuidMessagesLast(uuid) {
        return await this.prisma.messages.findMany({
            where: {
                chat: {
                    uuid: uuid
                }
            },
            orderBy: {
                created_at: 'desc',
            },
            take: 1,
        });
    }
    async createMessages(data) {
        return await this.prisma.messages.create({
            data: data,
        });
    }
    async updateeMessage(id, data) {
        return await this.prisma.messages.update({
            where: {
                message_id: id,
            },
            data: data,
        });
    }
    async deleteMessage(id) {
        return await this.prisma.messages.delete({
            where: {
                message_id: id,
            },
        });
    }
    async deleteMessageChatId(id) {
        return await this.prisma.messages.delete({
            where: {
                message_id: id,
            },
        });
    }
};
MessagesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], MessagesRepository);
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messagen.repository.js.map