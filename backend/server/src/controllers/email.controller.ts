import { Controller, Post, Get, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('email')
export class EmailController {
  constructor() {}

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
