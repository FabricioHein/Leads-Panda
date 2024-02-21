import { Module } from '@nestjs/common';
import { WhatsappService } from '../service/whatsapp.service';
import { WatsappController } from '../controllers/whatsapp.controller';
import { ChatRepository } from 'src/repositories/chat.repository';

import { PrismaService } from 'src/base/relacional/PrismaService';
@Module({
  controllers: [WatsappController],
  providers: [WhatsappService,
    ChatRepository,
    PrismaService
  ],
})
export class WhatsappModule {}
