"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenIaService = void 0;
const common_1 = require("@nestjs/common");
const msg_response_1 = require("../utils/msg.response");
const openai_1 = require("openai");
let OpenIaService = class OpenIaService {
    static async getResposta(message) {
        try {
            const apiOpenIa = new openai_1.default({
                apiKey: message.apiKey,
                organization: message.organization,
            });
            const response = await apiOpenIa.chat.completions.create({
                model: 'gpt-4',
                messages: [
                    {
                        role: 'user',
                        content: message.prompt,
                    },
                ],
                temperature: 0,
                max_tokens: 2048,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            return response.choices[0].message.content;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
OpenIaService = __decorate([
    (0, common_1.Injectable)()
], OpenIaService);
exports.OpenIaService = OpenIaService;
//# sourceMappingURL=chatGpt.service.js.map