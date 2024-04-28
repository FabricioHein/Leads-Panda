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
let WhatsappService = class WhatsappService {
    Whats(data) {
        let dataWA = {
            token: '',
            appSecret: ''
        };
        if (data.token_whatsapp)
            dataWA['token'] = data.token_whatsapp;
        if (data.app_secret_whatsapp)
            dataWA['appSecret'] = data.app_secret_whatsapp;
        if (data.webhook_very_token)
            dataWA['webhookVerifyToken'] = data.webhook_very_token;
        return new whatsapp_api_js_1.default((0, node_1.Node18)(dataWA));
    }
    async sendMessageOficial(data) {
        try {
            const wa = this.Whats(data);
            let menssage;
            let sendMsg;
            if (data.type == 'txt') {
                menssage = new messages_1.Text(data.text, false);
                sendMsg = await wa.sendMessage(data.wa_id_numero_telefone, data.to_telefone, menssage);
            }
            ;
            if (data.type == 'image') {
                menssage = new messages_1.Image(data.image.id, true, '');
                sendMsg = await wa.sendMessage(data.wa_id_numero_telefone, data.to_telefone, menssage);
            }
            ;
            if (sendMsg.messages[0].id) {
                return true;
            }
            return false;
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