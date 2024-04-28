import { Module } from '@nestjs/common';
import { WhatsappService } from '../service/whatsapp.service';
import { WebhookController } from '../controllers/webhook.controller';

import { ChatRepository } from 'src/repositories/chat.repository';

import { PrismaService } from 'src/base/relacional/PrismaService';
@Module({
  controllers: [
    WebhookController
  ],
  providers: [WhatsappService,
    ChatRepository,
  PrismaService
  ],
})
export class WhatsappModule {}
