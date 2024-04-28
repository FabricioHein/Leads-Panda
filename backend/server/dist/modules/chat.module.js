"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("../service/chat.service");
const chat_controller_1 = require("../controllers/chat.controller");
const chat_info_repository_1 = require("../repositories/chat-info.repository");
const chat_repository_1 = require("../repositories/chat.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const messagen_repository_1 = require("../repositories/messagen.repository");
const whatsapp_service_1 = require("../service/whatsapp.service");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [chat_controller_1.ChatController],
        providers: [
            whatsapp_service_1.WhatsappService,
            chat_service_1.ChatService,
            chat_info_repository_1.ChatInfoRepository,
            chat_repository_1.ChatRepository,
            messagen_repository_1.MessagesRepository,
            PrismaService_1.PrismaService,
        ],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map