"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageDto {
    constructor(data) {
        this.telefone = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.id = data.key.id;
        this.participant = data.key.participant;
        this.nome = data.pushName;
        this.msg = this.getConversationText(data.message);
        this.verifiedBizName = data.verifiedBizName;
        this.sessionId = data.sessionId;
    }
    getConversationText(message) {
        if (message && message.conversation) {
            return message.conversation;
        }
        else if (message && message.extendedTextMessage && message.extendedTextMessage.text) {
            return message.extendedTextMessage.text;
        }
        else {
            return null;
        }
    }
}
exports.default = MessageDto;
//# sourceMappingURL=message-dto.js.map