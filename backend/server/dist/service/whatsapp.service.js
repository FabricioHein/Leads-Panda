"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const common_1 = require("@nestjs/common");
const msg_response_1 = require("../utils/msg.response");
const whatsapp_api_js_1 = require("whatsapp-api-js");
const messages_1 = require("whatsapp-api-js/messages");
const node_1 = require("whatsapp-api-js/setup/node");
const PrismaService_1 = require("../base/relacional/PrismaService");
const prisma = new PrismaService_1.PrismaService();
let WhatsappService = class WhatsappService {
    async sendMessage() {
        try {
            let data = {
                token_whatsapp: 'EAATxPolaVr0BOZCTJzSqj5sZA0b2lN9i7QLjmp94UY9tAUKDzXXDsJlWw9WwVaUwzJANu7rOjM7bMqfG18TXThtIXmnjT8jCCmtZC3XLCLLWcDVPP1vkZBhZB9h3tx3usL3D2KUKbZAZApP7yJEzTDByHMvcKlhLiZCQGdeB02OSy2B67ZCLEIuxHr5CGzxDzRHECTTBI7cYZADZAx7cPZBPgzSQA3x7OnzC9ZB7b',
                app_secret_whatsapp: '9113ea6493357243a61206f11b150d05',
                webhookVerifyToken: '',
                wa_id_numero_telefone: '137539496103073',
                txt: 'testando 1',
                type: 'txt',
                to_telefone: '554191596195',
                uuid: '54045084-b284-41b0-a3e0-5280c9841ff5'
            };
            if (data.uuid) {
                const chatInfo = await prisma.chat_info.findFirst({
                    where: {
                        uuid: data.uuid
                    }
                });
                if (chatInfo) {
                    const wa = new whatsapp_api_js_1.default((0, node_1.Node18)({
                        token: data.token_whatsapp,
                        appSecret: data.app_secret_whatsapp,
                    }));
                    let menssage;
                    menssage = new messages_1.Text(data.txt);
                    console.log(menssage);
                    if (data.type == 'txt') {
                        return await wa.sendMessage(data.wa_id_numero_telefone, data.to_telefone, menssage);
                    }
                }
                return {
                    msg: 'Error para enviar 1'
                };
            }
            return {
                msg: 'Error para enviar'
            };
            ;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
WhatsappService = __decorate([
    (0, common_1.Injectable)()
], WhatsappService);
exports.WhatsappService = WhatsappService;
//# sourceMappingURL=whatsapp.service.js.map