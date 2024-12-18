import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ProjetoService } from '../service/projeto.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/projeto')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}
  @UseGuards(JwtAuthGuard)
  @Get('todos/:empresa_configId')
  async getAllProjeto(@Param('empresa_configId') id) {
    try {
      return await this.projetoService.getAllProjeto(id);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getAllProjetoById(@Param('id') id) {
    try {
      return await this.projetoService.getAllProjetoById(id);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteProjeto(@Request() req) {
    try {
      return await this.projetoService.deleteProjeto(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createProjeto(@Request() req) {
    try {
      return await this.projetoService.createProjeto(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarProjeto(@Request() req) {
    try {
      return await this.projetoService.atualizarProjeto(req.body);
    } catch (error) {
      return error;
    }
  }
}
