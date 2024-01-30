import { Injectable } from '@nestjs/common';
import { ErroBadRequest } from 'src/utils/msg.response';
import WhatsAppAPI from "whatsapp-api-js";
import { Text, Image, Document, Template } from "whatsapp-api-js/messages";
import * as Contacts from "whatsapp-api-js/messages/contacts";
import { Node18 } from "whatsapp-api-js/setup/node";


@Injectable()
export class WhatsappService {
  // Whats(data) {
  //   const dataWA = {};

  //   if(data.token) dataWA['token'] = data.token;
  //   if(data.app_secret) dataWA['appSecret'] = data.app_secret;
  //   if(data.webhook_very_token) dataWA['webhookVerifyToken'] = data.webhook_very_token;

  //   return new WhatsAppAPI(Node18(dataWA));
  // }
  // async sendMessage(data) {
  //   try {
  //     const wa = this.Whats(data);
  //     let menssage;
      
  //     if(data.type=='txt'){
  //       menssage = new Text(data.txt, false);
  //     }
  //     // menssage = new Template('hello_world', 'en_US' )

  //     const sendMessage = await wa.sendMessage(
  //       data.wa_id_numero_telefone,
  //       data.to_telefone,
  //       menssage
  //     );

  //     return sendMessage;
      
  //   } catch (error) {
  //     return ErroBadRequest(error)
  //   }
  // }
}
