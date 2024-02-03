export interface IMailServiceProps {
    to: string;
    subject: string;
    variables: any;
    path: string;
}
export declare abstract class IMailService {
    abstract sendEmail({ to, subject, variables, path, }: IMailServiceProps): Promise<boolean>;
}
