export default class MessageDto {
    telefone: string;
    fromMe: boolean;
    id: string;
    participant?: any; // Você pode alterar o tipo conforme necessário
    nome: string;
    msg: string | null;
    verifiedBizName: string | undefined;
    sessionId: string;

    constructor(data: any) {
        this.telefone = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.id = data.key.id;
        this.participant = data.key.participant;
        this.nome = data.pushName;
        this.msg = this.getConversationText(data.message);
        this.verifiedBizName = data.verifiedBizName;
        this.sessionId = data.sessionId;
    }

    private getConversationText(message: any): string | null {
        if (message && message.conversation) {
            return message.conversation;
        } else if (message && message.extendedTextMessage && message.extendedTextMessage.text) {
            return message.extendedTextMessage.text;
        } else {
            return null; // or any default value you prefer
        }
    }
}
