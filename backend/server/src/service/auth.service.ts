import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

import { ConfigService } from 'src/service/config.service';
import { ForbiddenAceptable } from 'src/utils/msg.response';
import { JwtService } from '@nestjs/jwt';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { BcryptService as Jwt } from 'bcrypt-jwt-module';
import axios from 'axios';
import { verify } from 'crypto';
const jwt = new Jwt();

@Injectable()
export class AuthService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async getGoogleCalendarEvents(accessToken: string): Promise<any> {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const response = await calendar.events.list({
      calendarId: 'primary',
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return response.data.items;
  }
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usuarioRepository.findOne(username);


    if (user && user.password) {
      const match = await jwt.compare(pass, user.password);
''
      if (match) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    return null;
  }
  async validarTokenGoogle(token: string): Promise<boolean> {
    try {
      const response = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`);
      // Verifica se a resposta tem o status 200 e se o token é válido
      console.log(response);
      if (response.status === 200 && response.data.aud === 'seu-client-id-do-google') {
        return true; // Token válido
      } else {
        return false; // Token inválido
      }
    } catch (error) {
      console.error('Erro ao validar token:', error.response.data);
      return false; // Erro ao validar o token
    }
  }

  async validaEmail(uuid: any){

    try {
      const code = await this.usuarioRepository.findVerificationCreateCode(uuid);
   

      if(code){

        const usuario = await this.usuarioRepository.getByEmailUser(code.email);
        console.log(usuario);

        if(usuario){

          await this.usuarioRepository.updateUser(usuario.id, {
            verifiedAt: new Date()
          });

          return {
            msg: 'Verificado com Sucesso!',
            status: 200
          };
        };
        
      };

    } catch (error) {
      return {
        msg: 'Erro ao validar usuario:',
        status: 400
      };
    }    
    
  }
  async loginAcessoGoogle(data: any) {

    const { token} = data;
     const user = await this.usuarioRepository.findOne(data.email);
    if(user && this.validarTokenGoogle(token)){

      // const eventosUsuario = await this.getGoogleCalendarEvents(token);
      // console.log(eventosUsuario);
      const payload = { username: user.nome, id: user.id };
      var novoToken = this.jwtService.sign(payload);

      const userLogin = await this.configService.getConfig(user.id, novoToken);
      return userLogin;
    }; 
   
    return {
      msg: 'Não Autorizado',
      status: 401
    };
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
