import { WhatsappService } from '../service/whatsapp.service';
export declare class WatsappController {
    private readonly watsappService;
    constructor(watsappService: WhatsappService);
    whatsapp(): Promise<import("whatsapp-api-js/types").ServerSentMessageResponse | import("whatsapp-api-js/types").ServerErrorResponse | Response | {
        msg: string;
    }>;
}
