import { FormularioService } from '../service/formulario.service';
import {
  Controller,
  Get,
  Post,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/formulario-ask-form')
export class FormularioAskController {
  constructor(private readonly formularioAskService: FormularioService) {}

  @Get('form/:url')
  async getByURLFormularioDinamicoOpen(@Param('url') url) {
    try {
      return await this.formularioAskService.getByURLFormularioDinamicoOpen(
        url,
      );
    } catch (error) {
      return error;
    }
  }

  @Post()
  async createFormularioAskDinamico(@Request() req) {
    try {
      return await this.formularioAskService.createFormularioAsk(req.body);
    } catch (error) {
      return error;
    }
  }
}
