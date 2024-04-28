import { Injectable } from '@nestjs/common';
import { ChatRepository } from 'src/repositories/chat.repository';
import { ChatInfoRepository } from 'src/repositories/chat-info.repository';
import { MessagesRepository } from 'src/repositories/messagen.repository';
import { ErroBadRequest } from 'src/utils/msg.response';
import { WhatsappService } from './whatsapp.service';

@Injectable()
export class ChatService {
  constructor(
    private messagesRepository: MessagesRepository,
    private chatRepository: ChatRepository,
    private chatInfoRepository: ChatInfoRepository,
    private whatsappService: WhatsappService

  ) { }

  async getChatInfoByUuid(uuid) {
    try {
      
      return await this.chatInfoRepository.getByUuidChatInfo(uuid);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async updatechatInfo(data: any) {
    try {
      const { chat_info_id } = data;
      const chatInfo = data;

      return await this.chatInfoRepository.updateChatInfo(
        Number(chat_info_id),
        chatInfo,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllChatInfo(clienteId) {
    try {
      return this.deleteToken(await this.chatInfoRepository.getChatInfoAll(Number(clienteId)));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async getByIdchatInfo(clienteId) {
    try {
      return this.deleteToken(await this.chatInfoRepository.getByIdChatInfo(Number(clienteId)));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createchatInfo(data: any) {
    try {
      const chatInfoHas =  await this.chatInfoRepository.getChatInfoAllType(
        data.cliente_id,
        data.type);
        return await this.chatInfoRepository.createChatInfo(data);
   
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async deletechatInfo(data: any) {
    try {

      const id = data.chat_info_id;  
      return await this.chatInfoRepository.deleteChatInfo(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async getChatInfoByUuidCliente(uuid) {
    try {

      const getChat = await this.chatInfoRepository.getByUuidChatInfo(uuid);

      if (getChat) {
        return getChat;
      }
      return ErroBadRequest('error');
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  //messagens
  async getAllChatMsgm(chatId) {
    try {
      return await this.messagesRepository.getAllChatMsgm(Number(chatId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByChatUuidMessages(uuid) {
    try {
      return await this.messagesRepository.getByChatUuidMessages(uuid);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByChatUuidMessagesLast(uuid) {
    try {
      return await this.messagesRepository.getByChatUuidMessagesLast(uuid);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async createMessages(msg) {
    try {      
      const chatHas = await this.getChatInfoByUuid(msg.uuid);
      if (chatHas) {   
        let sendMessage = {
          ...chatHas,
          ...msg
        }

        if(chatHas.type == 'WhatsApp'){
          const whatsapp = await this.whatsappService.sendMessageOficial(sendMessage);
          delete msg['uuid'];
          if(whatsapp){
            return await this.messagesRepository.createMessages(msg);
          }
          return ErroBadRequest('Erro para Enviar Msg');
        }
        else if(chatHas.type == 'web'){
          return await this.messagesRepository.createMessages(msg);
        }        return ErroBadRequest('Erro para Enviar Msg');

     
      };
      return ErroBadRequest('Não Existe o Chat');
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
 //chat
  async getChaByUuid(uuid) {
    try {
      const chat = await this.chatRepository.getByUiidChat(uuid);
      if (chat) {
        return chat
      }
      return null;
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async atualizarChat(data: any) {
    try {
      const { id } = data;
      const dataChat = data;

      return await this.chatRepository.updateChat(Number(id), dataChat);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllChatOpen(clienteId) {
    try {
      return await this.chatRepository.getAllChatOpen(Number(clienteId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllChatClose(clienteId) {
    try {
      return await this.chatRepository.getAllChatClose(Number(clienteId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createChat(data: any) {
    try {

      return await this.chatRepository.createChat(data);

    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getMessages(data: any) {

  }
  async novoChat(data: any) {
    try {

      const chat = data;
      const chatInfo = await this.chatInfoRepository.getChatInfoAll(Number(chat.cliente_id));

      if (chatInfo && chat.telefone && chat.email) {

        const telefone = await await this.chatRepository.getChatTelefone(
          chat.telefone
        );

        if (!telefone) {

          return await this.chatRepository.createChat(data);
        }
        return telefone;
      }
      return ErroBadRequest('não encontrado chat');
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteChat(data: any) {
    try {
      const id = data.id;
      return await this.chatRepository.deleteChat(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteToken(data: any) {
    try {
      delete data['key_chatgpt'];
      delete data['organization_chatgpt'];
      delete data['key_facebook'];
      delete data['token_whatsapp'];
      delete data['app_secret_whatsapp'];
      delete data['wa_id_numero_telefone'];

      return data
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

}
