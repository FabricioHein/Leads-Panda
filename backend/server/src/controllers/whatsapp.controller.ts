import { Controller, Post, Request, UseGuards, Param } from '@nestjs/common';
import { WhatsappService } from '../service/whatsapp.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('api/whatsapp')
export class WatsappController {
  constructor(private readonly watsappService: WhatsappService) { }
  // @UseGuards(JwtAuthGuard)

  @Post('send-messagens')
  async whatsapp( ) {
    return await this.watsappService.sendMessage();
  }
}
