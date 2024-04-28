import WhatsAppAPI from "whatsapp-api-js";
export declare class WhatsappService {
    Whats(data: any): WhatsAppAPI;
    sendMessageOficial(data: any): Promise<boolean>;
}
