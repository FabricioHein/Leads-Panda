import { Controller, Post, Get, Put, Request, UseGuards } from '@nestjs/common';
import { EmailService } from '../service/email.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @UseGuards(JwtAuthGuard)
  @Get('enviar')
  enviarEmail() {
    try {
      return 'ok';
    } catch (error) {
      return error;
    }
  }
}
