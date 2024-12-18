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
exports.ChatInfoRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ChatInfoRepository = class ChatInfoRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getChatInfoAllType(clienteId, type) {
        return await this.prisma.chat_info.findMany({
            where: {
                AND: [
                    {
                        type: type
                    },
                    {
                        empresa_configId: clienteId
                    }
                ]
            },
        });
    }
    async getChatInfoAll(clienteId) {
        return await this.prisma.chat_info.findMany({
            where: {
                empresa_configId: clienteId,
            },
        });
    }
    async getByIdChatInfo(id) {
        return await this.prisma.chat_info.findFirst({
            where: {
                chat_info_id: id,
            }
        });
    }
    async getByUuidChatInfo(uuid) {
        return await this.prisma.chat_info.findFirst({
            where: {
                uuid: uuid,
            },
        });
    }
    async createChatInfo(data) {
        return await this.prisma.chat_info.create({
            data: data,
        });
    }
    async updateChatInfo(id, data) {
        return await this.prisma.chat_info.update({
            where: {
                chat_info_id: id,
            },
            data: data,
        });
    }
    async deleteChatInfo(id) {
        return await this.prisma.chat_info.delete({
            where: {
                chat_info_id: id,
            },
        });
    }
};
ChatInfoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ChatInfoRepository);
exports.ChatInfoRepository = ChatInfoRepository;
//# sourceMappingURL=chat-info.repository.js.map