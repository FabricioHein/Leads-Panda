import {
    Controller,
    Post,
    Get,
    Put,
    Request,
    UseGuards,
    Param,
  } from '@nestjs/common';
  import { AgendaService } from '../service/agenda.service';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  
  @Controller('api/agenda')
  export class AgendaController {
    constructor(private readonly agendaService: AgendaService) {}

    @Post('agendamento/cliente')
    async getAgendaByDataUsuario(@Request() req) {
      try {
        return await this.agendaService.getAllClienteAngendaUser(req.body);
      } catch (error) {
        return error;
      }
    }
    @Post('agendamento/criarAgendamento')
    async crearAgendamentoExterno(@Request() req) {
      try {
        return await this.agendaService.crearAgendamentoExterno(req.body);
      } catch (error) {
        return error;
      }
    }
    @Post('agendamento/horarios')
    async getAllClienteAngendaUser(@Request() req) {
      try {
        return await this.agendaService.getAgendaByDataUsuario(req.body);
      } catch (error) {
        return error;
      }
    }

    @UseGuards(JwtAuthGuard)
    @Get('todos/:empresa_configId')
    async getAllagenda(@Param('empresa_configId') id) {
      try {
        return await this.agendaService.getAllAgenda(id);
      } catch (error) {
        return error;
      }
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getAllagendaById(@Param('id') id) {
      try {
        return await this.agendaService.getAllAgenda(id);
      } catch (error) {
        return error;
      }
    }
  
    @UseGuards(JwtAuthGuard)
    @Post('delete')
    async deleteagenda(@Request() req) {
      try {
        return await this.agendaService.deleteAgenda(req.body);
      } catch (error) {
        return error;
      }
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    async createagenda(@Request() req) {
      try {
        return await this.agendaService.createAgenda(req.body);
      } catch (error) {
        return error;
      }
    }
    @UseGuards(JwtAuthGuard)
    @Put()
    async atualizarAgenda(@Request() req) {
      try {
        return await this.agendaService.atualizarAgenda(req.body);
      } catch (error) {
        return error;
      }
    }
  }
  