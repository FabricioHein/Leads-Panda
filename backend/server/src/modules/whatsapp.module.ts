import { Module } from '@nestjs/common';
import { WhatsappService } from '../service/whatsapp.service';
import { WatsappController } from '../controllers/whatsapp.controller';

@Module({
  controllers: [WatsappController],
  providers: [WhatsappService],
})
export class WhatsappModule {}
