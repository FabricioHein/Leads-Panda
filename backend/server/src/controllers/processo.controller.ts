import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ProcessoService } from '../service/processo.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/processo')
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}
  @UseGuards(JwtAuthGuard)
  @Get('todos/:id')
  async getAllProcesso(@Param('id') id, @Request() req) {
    try {
      return await this.processoService.getAllProcesso(Number(id));
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteProcesso(@Request() req) {
    try {
      return await this.processoService.deleteProcesso(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createProcesso(@Request() req) {
    try {
      return await this.processoService.createProcesso(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarProcesso(@Request() req) {
    try {
      return await this.processoService.atualizarProcesso(req.body);
    } catch (error) {
      return error;
    }
  }
}
