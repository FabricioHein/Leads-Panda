import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ClientesService } from '../service/clientes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/clientes')
export class ClientesController {
  constructor(private readonly clienteService: ClientesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('todos/:clienteId')
  async getAllClientes(@Param('clienteId') clienteId) {
    try {
      return await this.clienteService.getAllClientes(clienteId);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteClientes(@Request() req) {
    try {
      return await this.clienteService.deleteClientes(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createClientes(@Request() req) {
    try {
      return await this.clienteService.createClientes(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('historico')
  async createHistoricoClientes(@Request() req) {
    try {
      return await this.clienteService.createHistoricoClientes(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarClientes(@Request() req) {
    try {
      return await this.clienteService.atualizarClientes(req.body);
    } catch (error) {
      return error;
    }
  }
}
