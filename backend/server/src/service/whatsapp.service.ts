import { Injectable } from '@nestjs/common';
import { ErroBadRequest } from 'src/utils/msg.response';
import WhatsAppAPI from "whatsapp-api-js";
import { Text, Image, Document, Template } from "whatsapp-api-js/messages";
import { Node18 } from "whatsapp-api-js/setup/node";

import { PrismaService } from 'src/base/relacional/PrismaService';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaService();


@Injectable()
export class WhatsappService {

  async sendMessage() {

    try {
      let data = {
        token_whatsapp: 'EAATxPolaVr0BOZCTJzSqj5sZA0b2lN9i7QLjmp94UY9tAUKDzXXDsJlWw9WwVaUwzJANu7rOjM7bMqfG18TXThtIXmnjT8jCCmtZC3XLCLLWcDVPP1vkZBhZB9h3tx3usL3D2KUKbZAZApP7yJEzTDByHMvcKlhLiZCQGdeB02OSy2B67ZCLEIuxHr5CGzxDzRHECTTBI7cYZADZAx7cPZBPgzSQA3x7OnzC9ZB7b',
        app_secret_whatsapp: '9113ea6493357243a61206f11b150d05',
        webhookVerifyToken: '',
        wa_id_numero_telefone: '137539496103073',
        txt: 'testando 1',
        type: 'txt',
        to_telefone: '554191596195',
        uuid: '54045084-b284-41b0-a3e0-5280c9841ff5'
      };


      if (data.uuid) {

        const chatInfo = await prisma.chat_info.findFirst({
          where: {
            uuid: data.uuid
          }
        });

        if (chatInfo) {

          const wa = new WhatsAppAPI(Node18({
            token: data.token_whatsapp,
            appSecret: data.app_secret_whatsapp,
            // webhookVerifyToken: data.webhook_very_token
          }));

          let menssage;
          menssage = new Text(data.txt);

          console.log(menssage)

          // menssage = new Template('hello_world', 'en_US' )
          if (data.type == 'txt') {
            return await wa.sendMessage(
              data.wa_id_numero_telefone,
              data.to_telefone,
              menssage
            );

          }

        }
        return {
          msg: 'Error para enviar 1'
        };

      }




      return {
        msg: 'Error para enviar'
      };;

    } catch (error) {
      return ErroBadRequest(error)
    }
  }
}