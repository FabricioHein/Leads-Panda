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
        if (data.token)
            dataWA['token'] = data.token;
        if (data.app_secret)
            dataWA['appSecret'] = data.app_secret;
        if (data.webhook_very_token)
            dataWA['webhookVerifyToken'] = data.webhook_very_token;
        return new whatsapp_api_js_1.default((0, node_1.Node18)(dataWA));
    }
    async sendMessage(data) {
        try {
            const wa = this.Whats(data);
            let menssage;
            if (data.type == 'txt') {
                menssage = new messages_1.Text(data.txt, false);
                return await wa.sendMessage(data.wa_id_numero_telefone, data.to_telefone, menssage);
            }
            ;
            if (data.type == 'image') {
                menssage = new messages_1.Image(data.image.id, true, '');
                return await wa.sendMessage(data.wa_id_numero_telefone, data.to_telefone, menssage);
            }
            ;
            if (data.type == 'txt') {
                menssage = new messages_1.Text(data.txt, false);
                return await wa.sendMessage(data.wa_id_numero_telefone, data.to_telefone, menssage);
            }
            ;
            return null;
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