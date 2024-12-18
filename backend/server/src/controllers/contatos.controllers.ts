import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ContatosService } from '../service/contatos.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/contatos')
export class ContatosController {
  constructor(private readonly contatoService: ContatosService) {}

  @UseGuards(JwtAuthGuard)
  @Get('getByIdContatosChat/:id')
  async getByIdContatosChat(@Param('id') id, @Request() req) {
    try {
      return await this.contatoService.getByIdContatosChat(id);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('filter/number/:number')
  async getByIdNumber(@Param('number') number, @Request() req) {
    try {
      return await this.contatoService.getByIdNumber(number);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('filter/name/:name')
  async getByIdName(@Param('name') name, @Request() req) {
    try {
      return await this.contatoService.getByIdName(name);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('todos/:empresa_configId')
  async getAllContatos(@Param('empresa_configId') empresa_configId) {
    try {
      return await this.contatoService.getAllContatos(empresa_configId);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteContatos(@Request() req) {
    try {
      return await this.contatoService.deleteContatos(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createContatos(@Request() req) {
    try {
      return await this.contatoService.createContatos(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarContatos(@Request() req) {
    try {
      return await this.contatoService.atualizarContatos(req.body);
    } catch (error) {
      return error;
    }
  }
}
