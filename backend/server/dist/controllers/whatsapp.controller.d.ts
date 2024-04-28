import { WhatsappService } from 'src/service/whatsapp.service';
export declare class WhatsappController {
    private readonly wa;
    constructor(wa: WhatsappService);
    getAllUsuario(uuid: any): Promise<any>;
}
