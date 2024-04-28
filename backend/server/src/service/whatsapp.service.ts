import { Injectable } from '@nestjs/common';
import { ErroBadRequest } from 'src/utils/msg.response';
import WhatsAppAPI from "whatsapp-api-js";
import { Text, Image, Document, Template } from "whatsapp-api-js/messages";
import * as Contacts from "whatsapp-api-js/messages/contacts";
import { Node18 } from "whatsapp-api-js/setup/node";
import * as whatsapp from "wa-multi-session";
import { PrismaService } from 'src/base/relacional/PrismaService';


@Injectable()
export class WhatsappService {


  //API OFICIAL WHATSAPP
  Whats(data) {
    let dataWA = {
      token: '',
      appSecret: ''
    };

    if (data.token_whatsapp) dataWA['token'] = data.token_whatsapp;
    if (data.app_secret_whatsapp) dataWA['appSecret'] = data.app_secret_whatsapp;
    if (data.webhook_very_token) dataWA['webhookVerifyToken'] = data.webhook_very_token;

    return new WhatsAppAPI(Node18(dataWA));
  }
  async sendMessageOficial(data) {
    try {
      const wa = this.Whats(data);
      let menssage;
      let sendMsg;


      if (data.type == 'txt') {
        menssage = new Text(data.text, false);

        sendMsg = await wa.sendMessage(
          data.wa_id_numero_telefone,
          data.to_telefone,
          menssage
        );


      };

      if (data.type == 'image') {
        menssage = new Image(
          data.image.id, true, '');

        sendMsg = await wa.sendMessage(
          data.wa_id_numero_telefone,
          data.to_telefone,
          menssage
        );

      };

      if (sendMsg.messages[0].id) {
        return true
      }

      return false;

    } catch (error) {
      return ErroBadRequest(error)
    }
  }
  
}
