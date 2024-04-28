export default class MessageDto {
    telefone: string;
    fromMe: boolean;
    id: string;
    participant?: any;
    nome: string;
    msg: string | null;
    verifiedBizName: string | undefined;
    sessionId: string;
    constructor(data: any);
    private getConversationText;
}
