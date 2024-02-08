import { Injectable } from '@nestjs/common';
import { ErroBadRequest } from 'src/utils/msg.response';
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

@Injectable()
export class WhatsappService {

  getQrCode(clientId) {

    const client = new Client({
      authStrategy: new LocalAuth({ clientId: clientId }),
      puppeteer: { headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--single-process', // <- this one doesn't works in Windows
          '--disable-gpu'
        ] }
    
    });
    
    client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
      console.log('Client is ready!');
    });

    client.initialize();

    return {
      qr: true
    }

  }


}
