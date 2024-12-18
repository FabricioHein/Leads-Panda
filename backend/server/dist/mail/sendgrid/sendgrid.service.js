"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendgridService = void 0;
const fs = require('fs').promises;
const nodemailer = require('nodemailer');
const handlebars_1 = require("handlebars");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
class SendgridService {
    async sendEmail({ to, subject, variables, path, }) {
        try {
            const templateFileContent = await fs.readFile(path, 'utf-8');
            const templateParse = handlebars_1.default.compile(templateFileContent);
            const templateHTML = templateParse(variables);
            const msg = {
                to: to,
                from: process.env.SENDGRID_EMAIL,
                subject: subject,
                html: templateHTML,
            };
            const response = await sgMail.send(msg);
            if (response[0].statusCode == 202) {
                return true;
            }
            return false;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async sendEmaiNodemailer({ to, subject, variables, path, }) {
        try {
            const templateFileContent = await fs.readFile(path, 'utf-8');
            const templateParse = handlebars_1.default.compile(templateFileContent);
            const templateHTML = templateParse(variables);
            const mailOptions = {
                to: to,
                from: process.env.SENDGRID_EMAIL,
                subject: subject,
                html: templateHTML,
            };
            const retorno = await this.wrapedSendMail(mailOptions);
            if (retorno) {
                return true;
            }
            return false;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async wrapedSendMail(mailOptions) {
        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport({
                host: process.env.MAIL_TRAP,
                port: process.env.MAIL_TRAP_PORT,
                auth: {
                    user: process.env.MAIL_TRAP_USER,
                    pass: process.env.MAIL_TRAP_PASS
                }
            });
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error('Erro ao enviar e-mail:', error.message);
                    reject(false);
                }
                else {
                    console.log('E-mail enviado com sucesso:', info.response);
                    resolve(true);
                }
            });
        });
    }
}
exports.SendgridService = SendgridService;
//# sourceMappingURL=sendgrid.service.js.map