import { Controller, Request, Get, Post, Param } from '@nestjs/common';
import { AuthenticatorService } from '../service/authenticator.service';
import { UsuariosService } from '../service/usuarios.service';

@Controller('api/authenticator')
export class AuthenticatorController {
  constructor(
    private readonly authenticatorService: AuthenticatorService,
    private readonly usuariosService: UsuariosService,
  ) {}

  @Post('criar-usuario-cliente')
  async criarNovoCliente(@Request() req) {
    try {
      return await this.usuariosService.createUsuarioCliente(req.body);
    } catch (error) {
      return error;
    }
  }

  @Get('novasenha/:email')
  async novaSenhaUsuarioEmail(@Param('email') email) {
    try {
      return await this.usuariosService.novaSenhaUsuarioEmail(email);
    } catch (error) {
      return error;
    }
  }
}
