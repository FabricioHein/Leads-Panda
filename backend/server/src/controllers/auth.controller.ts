import { Controller, Get, Post, Req, Res, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuariosService } from '../service/usuarios.service';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly authService: AuthService
  ) { }


  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    let usuario = req.user;
    usuario['type'] = 'google';
    const user = await this.usuariosService.createUsuarioCliente(usuario);

    if(user){
      res.redirect(`http://localhost:8080/redirect?token=${usuario.accessToken}&email=${usuario.email}`);
    }else{
      res.redirect(`http://localhost:8080}`);
    }  
  }

  @Post('current_user')
 async getCurrentUser(@Req() req) {
  return await this.authService.loginAcessoGoogle(req.body);

  }
  @Get('validar-email/:uuid')
  async validaEmail(@Param('uuid') uuid){
    return await this.authService.validaEmail(uuid);

  }

  @Get('logout')
  logout(@Req() req, @Res() res) {
    req.logout();
    res.redirect('/');
  }
}
