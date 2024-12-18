import {
  Controller,
  Post,
  Get,
  Put,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/usuario')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @UseGuards(JwtAuthGuard)
  @Post('criar-usuario-cliente')
  async criarNovoCliente(@Request() req) {
    try {
      return await this.usuariosService.createUsuarioCliente(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('todos/:empresa_configId')
  async getAllUsuario(@Param('empresa_configId') empresa_configId) {
    try {
      return await this.usuariosService.getAllUsuario(empresa_configId);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('novasenha/:email')
  async novaSenhaUsuarioEmail(@Param('email') email) {
    try {
      return await this.usuariosService.novaSenhaUsuarioEmail(email);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteUsuario(@Request() req) {
    try {
      return await this.usuariosService.deleteUsuario(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('foto/perfil')
  async salvarFotoPerfil(@Request() req) {
    try {
      return await this.usuariosService.salvarFotoPerfil(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('atualizar/permissao')
  async atualizarPermissaoModulos(@Request() req) {
    try {
      return await this.usuariosService.atualizarPermissoesModulos(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createUsuario(@Request() req) {
    try {
      return await this.usuariosService.createUsuario(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarUsuario(@Request() req) {
    try {
      return await this.usuariosService.atualizarUsuario(req.body);
    } catch (error) {
      return error;
    }
  }
}
