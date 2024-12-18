
const fs = require('fs').promises;
const nodemailer = require('nodemailer');
import handlebars from 'handlebars';
import {
  IMailService,
  IMailServiceProps,
} from '../../abstracts/mail-services.abstract';


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



export class SendgridService implements IMailService {
  async sendEmail({
    to,
    subject,
    variables,
    path,
  }: IMailServiceProps): Promise<boolean> {
    try {


      const templateFileContent = await fs.readFile(path, 'utf-8');

      const templateParse = handlebars.compile(templateFileContent);

      const templateHTML = templateParse(variables);

      const msg = {
        to: to, // Change to your recipient
        from: process.env.SENDGRID_EMAIL, // Change to your verified sender
        subject: subject,
        html: templateHTML,
      };

      const response = await sgMail.send(msg);
      if (response[0].statusCode == 202) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
  async sendEmaiNodemailer({
    to,
    subject,
    variables,
    path,
  }: IMailServiceProps): Promise<boolean> {
    try {


      const templateFileContent = await fs.readFile(path, 'utf-8');

      const templateParse = handlebars.compile(templateFileContent);

      const templateHTML = templateParse(variables);

      const mailOptions = {
        to: to, // Change to your recipient
        from: process.env.SENDGRID_EMAIL, // Change to your verified sender
        subject: subject,
        html: templateHTML,
      };

      const retorno = await this.wrapedSendMail(mailOptions);

      if (retorno) {
        return true;

      }

      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
  async wrapedSendMail(mailOptions) {
    return new Promise((resolve, reject) => {

      let transporter = nodemailer.createTransport({
        host:  process.env.MAIL_TRAP,
        port: process.env.MAIL_TRAP_PORT,
        auth: {
          user:  process.env.MAIL_TRAP_USER,
          pass: process.env.MAIL_TRAP_PASS
        }
      });


      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error('Erro ao enviar e-mail:', error.message);
          reject(false);
        } else {
          console.log('E-mail enviado com sucesso:', info.response);
          resolve(true);
        }
      });
    });

  }

}
