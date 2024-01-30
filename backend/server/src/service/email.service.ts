import { Injectable } from '@nestjs/common';
// import request from 'request';
import { ErroBadRequest } from 'src/utils/msg.response';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
@Injectable()
export class EmailService {
  constructor() {}

  static executar() {
    try {
      const msg = {
        to: ['fabricio.hein@live.com', 'fabricio.hein@live.com'], // Change to your recipient
        from: 'fabricio.geohein@gmail.com', // Change to your verified sender
        subject: 'teste',
        text: 'Here’s the text version',
        html: 'And here’s the <strong>HTML</strong> version',
      };
      this.sendEmail(msg);

      return true;
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  static sendEmail(msg) {
    sgMail
      .sendMultiple(msg)
      .then(() => {
        console.log('Email sent', msg.to);
      })
      .catch((error) => {
        console.error(error);
      });
    return false;
  }
  attachments(fileURl) {
    // request(fileURl, { encoding: null }, (err, res, body) => {
    //   if (err) {
    //     return err;
    //   }
    //   if (body) {
    //     const textBuffered = Buffer.from(body);
    //     const msg = {
    //       to: 'recipient@test.org',
    //       from: 'sender@test.org',
    //       subject: 'Attachment',
    //       html: '<p>Here’s an attachment for you!</p>',
    //       attachments: [
    //         {
    //           content: textBuffered.toString('base64'),
    //           filename: 'some-attachment.pdf',
    //           type: 'application/pdf',
    //           disposition: 'attachment',
    //           content_id: 'mytext',
    //         },
    //       ],
    //     };
    //     // send msg here
    //   }
    // });
  }
}
