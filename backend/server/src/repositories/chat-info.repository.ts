import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatInfoRepository {
  constructor(private prisma: PrismaService) {}
  async getChatInfoAllType(clienteId, type) {
    return await this.prisma.chat_info.findMany({
      where: {
        AND: [
          {
            type: type
          },
          {
            empresa_configId: clienteId
          }
        ]
      },
    });
  }
  async getChatInfoAll(clienteId) {
    return await this.prisma.chat_info.findMany({
      where: {
        empresa_configId: clienteId,
      },
    });
  }
  async getByIdChatInfo(id) {
    return await this.prisma.chat_info.findFirst({
      where: {
        chat_info_id: id,
      }      
    });
  }
  async getByUuidChatInfo(uuid) {
    return await this.prisma.chat_info.findFirst({
      where: {
        uuid: uuid,
      },
    });
  }
  async createChatInfo(data) {
    return await this.prisma.chat_info.create({
      data: data,
    });
  }

  async updateChatInfo(id, data) {
    return await this.prisma.chat_info.update({
      where: {
        chat_info_id: id,
      },
      data: data,
    });
  }

  async deleteChatInfo(id) {
    
    return await this.prisma.chat_info.delete({
      where: {
        chat_info_id: id,
      },
    });
  }
}
