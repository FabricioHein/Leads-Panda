import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/service/auth.service';
import { ForbiddenAceptable } from 'src/utils/msg.response';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      ForbiddenAceptable('Senha ou Login Incorreto');
    }
    return user;
  }
}
