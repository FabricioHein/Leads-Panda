import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  constructor(private prisma: PrismaService) { }
  async getAllChatMsgm(id) {
    return await this.prisma.messages.findMany({
      where: {
        chat_id: id,
      },
      orderBy: {
        created_at: 'asc',
      },
    });
  }

  async getByChatUuidMessages(uuid) {
    return await this.prisma.messages.findMany({
      where: {
        chat: {
          uuid: uuid
        }
      },
      orderBy: {
        created_at: 'asc',
      },
    });
  }
  async getByChatUuidMessagesLast(uuid) {
    return await this.prisma.messages.findMany({
      where: {
        chat: {
          uuid: uuid
        }
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
    });
  }
  async createMessages(data) {
    return await this.prisma.messages.create({
      data: data,
    });
  }

  async updateeMessage(id, data) {
    return await this.prisma.messages.update({
      where: {
        message_id: id,
      },
      data: data,
    });
  }

  async deleteMessage(id) {
    return await this.prisma.messages.delete({
      where: {
        message_id: id,
      },
    });
  }
  async deleteMessageChatId(id) {
    return await this.prisma.messages.delete({
      where: {
        message_id: id,
      },
    });
  }
}
