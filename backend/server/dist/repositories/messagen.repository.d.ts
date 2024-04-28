import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class MessagesRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAllChatMsgm(id: any): Promise<{
        message_id: number;
        username: string;
        text: string;
        type: string;
        whatsapp_id: string;
        chat_id: number;
        atendimento: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getByChatUuidMessages(uuid: any): Promise<{
        message_id: number;
        username: string;
        text: string;
        type: string;
        whatsapp_id: string;
        chat_id: number;
        atendimento: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getByChatUuidMessagesLast(uuid: any): Promise<{
        message_id: number;
        username: string;
        text: string;
        type: string;
        whatsapp_id: string;
        chat_id: number;
        atendimento: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    createMessages(data: any): Promise<{
        message_id: number;
        username: string;
        text: string;
        type: string;
        whatsapp_id: string;
        chat_id: number;
        atendimento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    updateeMessage(id: any, data: any): Promise<{
        message_id: number;
        username: string;
        text: string;
        type: string;
        whatsapp_id: string;
        chat_id: number;
        atendimento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteMessage(id: any): Promise<{
        message_id: number;
        username: string;
        text: string;
        type: string;
        whatsapp_id: string;
        chat_id: number;
        atendimento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteMessageChatId(id: any): Promise<{
        message_id: number;
        username: string;
        text: string;
        type: string;
        whatsapp_id: string;
        chat_id: number;
        atendimento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
