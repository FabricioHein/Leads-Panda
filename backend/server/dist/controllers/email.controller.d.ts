import { EmailService } from '../service/email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    enviarEmail(): any;
}
