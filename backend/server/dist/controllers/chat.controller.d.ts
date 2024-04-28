import { ChatService } from '../service/chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    getAllChatInfo(clienteId: any): Promise<any>;
    getChatInfo(uuid: any): Promise<any>;
    deletechatInfo(req: any): Promise<any>;
    createchatInfo(req: any): Promise<any>;
    updatechatInfo(req: any): Promise<any>;
    getAllChatOpen(clienteId: any): Promise<any>;
    getAllChatClose(clienteId: any): Promise<any>;
    getChatByUuid(uuid: any): Promise<any>;
    getAllChatMsgm(chatId: any): Promise<any>;
    deleteChat(req: any): Promise<any>;
    createChat(req: any): Promise<any>;
    atualizarChat(req: any): Promise<any>;
    newMessages(req: any): Promise<any>;
    getChatInfoData(uuid: any): Promise<any>;
    getChaByUuid(uuid: any): Promise<any>;
    getByChatUuidMessages(uuid: any): Promise<any>;
    createMessages(req: any): Promise<any>;
    novoChat(req: any): Promise<any>;
    getByChatUuidMessagesLast(uuid: any): Promise<any>;
}
