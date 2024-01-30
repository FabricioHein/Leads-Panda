import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  Param,
  UseGuards,
} from '@nestjs/common';
import { FormularioService } from '../service/formulario.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @UseGuards(JwtAuthGuard)
  @Get('todos/:clienteId')
  async getAllFormularioDinamico(@Param('clienteId') clienteId) {
    try {
      return await this.formularioService.getAllFormularioDinamico(clienteId);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':url')
  async getByURLFormularioDinamico(@Param('url') url) {
    try {
      return await this.formularioService.getByURLFormularioDinamico(url);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteFormularioDinamico(@Request() req) {
    try {
      return await this.formularioService.deleteFormularioDinamico(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createFormularioDinamico(@Request() req) {
    try {
      return await this.formularioService.createFormularioDinamico(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarFormularioDinamico(@Request() req) {
    try {
      return await this.formularioService.atualizarFormularioDinamico(req.body);
    } catch (error) {
      return error;
    }
  }
}
