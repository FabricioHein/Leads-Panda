import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatRepository {
  constructor(private prisma: PrismaService) { }
  async getChatAll(clienteId) {
    return await this.prisma.chat.findMany({
      where: {
        cliente_id: clienteId,
      },
      include: {
        chat_info: {
          select: {
            uuid: true,
          },
        },
      },
    });
  }
  async getChatTelefone(telefone) {
    return await this.prisma.chat.findFirst({
      where: {
        telefone: String(telefone)

      },
      include: {
        messages: {
          orderBy: {
            created_at: 'asc'
          }
        },
        chat_info: {
          select: {
            uuid: true,
          },
        },
      },
    });
  }
  async getAllChatClose(clienteId) {
    return await this.prisma.chat.findMany({
      where: {
        cliente_id: clienteId,
        chat_open: true,
      },
      include: {
        chat_info: {
          select: {
            uuid: true,
          },
        },
      },
    });
  }
  async getAllChatOpen(clienteId) {
    return await this.prisma.chat.findMany({
      where: {
        cliente_id: clienteId,
        chat_open: false,
      },
      include: {
        chat_info: {
          select: {
            uuid: true,
          },
        },
      },
    });
  }
  async getByUiidChat(uuid) {
    return await this.prisma.chat.findFirst({
      where: {
        uuid: uuid
      },
    });
  }
  async getByIdChat(id) {
    return await this.prisma.chat.findFirst({
      where: {
        chat_id: id,
      },
    });
  }
  async createChat(data) {
    return await this.prisma.chat.create({
      data: data,
    });
  }

  async updateChat(id, data) {
    return await this.prisma.chat.update({
      where: {
        chat_id: id,
      },
      data: data,
    });
  }

  async deleteChat(id) {
    return await this.prisma.chat.delete({
      where: {
        chat_id: id,
      },
    });
  }
}
