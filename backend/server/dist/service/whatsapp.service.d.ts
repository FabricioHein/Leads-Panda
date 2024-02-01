import WhatsAppAPI from "whatsapp-api-js";
export declare class WhatsappService {
    Whats(data: any): WhatsAppAPI;
    sendMessage(data: any): Promise<any>;
}
