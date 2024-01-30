import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { WhatsappService } from '../service/whatsapp.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('api/whatsapp')
export class WatsappController {
  constructor(private readonly watsappService: WhatsappService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async whatsapp(@Request() req) {
    return ''
  }
}
