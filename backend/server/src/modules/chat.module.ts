import { Module } from '@nestjs/common';
import { ChatService } from '../service/chat.service';
import { ChatController } from '../controllers/chat.controller';
import { ChatInfoRepository } from 'src/repositories/chat-info.repository';
import { ChatRepository } from 'src/repositories/chat.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { MessagesRepository } from 'src/repositories/messagen.repository';

@Module({
  controllers: [ChatController],
  providers: [
    ChatService,
    ChatInfoRepository,
    ChatRepository,
    MessagesRepository,
    PrismaService,
  ],
})
export class ChatModule {}
