import { Injectable } from '@nestjs/common';

import { ConfigService } from 'src/service/config.service';
import { ForbiddenAceptable } from 'src/utils/msg.response';
import { JwtService } from '@nestjs/jwt';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { BcryptService as Jwt } from 'bcrypt-jwt-module';

const jwt = new Jwt();

@Injectable()
export class AuthService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usuarioRepository.findOne(username);


    if (user && user.password) {
      const match = await jwt.compare(pass, user.password);

      if (match) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    return null;
  }

  async loginAcesso(data: any) {
    const payload = { username: data.nome };
    const usuario = await this.usuarioRepository.findOne(data.email);
    const token = this.jwtService.sign(payload);
    // {
    //   expiresIn: '5m'
    // }
    if (usuario) {
      const userLogin = await this.configService.getConfig(usuario.id, token);
      return userLogin;
    }
    return {
      msg: 'Não Autorizado',
      status: 401
    };
  }
}
