export declare class WhatsappService {
    sendMessage(): Promise<import("whatsapp-api-js/types").ServerSentMessageResponse | import("whatsapp-api-js/types").ServerErrorResponse | Response | {
        msg: string;
    }>;
}
