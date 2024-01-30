import { Controller, Request, Post, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './service/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  async login(@Request() req) {
    return this.authService.loginAcesso(req.user);
  }
}
