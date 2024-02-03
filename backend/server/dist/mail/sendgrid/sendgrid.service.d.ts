import { IMailService, IMailServiceProps } from '../../abstracts/mail-services.abstract';
export declare class SendgridService implements IMailService {
    sendEmail({ to, subject, variables, path, }: IMailServiceProps): Promise<boolean>;
    sendEmaiNodemailer({ to, subject, variables, path, }: IMailServiceProps): Promise<boolean>;
    wrapedSendMail(mailOptions: any): Promise<unknown>;
}
