import { Controller, Post, Get, Put, Request, UseGuards } from '@nestjs/common';
import { ServicoService } from '../service/servicos.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}
  @UseGuards(JwtAuthGuard)
  @Get('todos')
  async getAllProduto() {
    try {
      return await this.servicoService.getAllServico();
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteProduto(@Request() req) {
    try {
      return await this.servicoService.deleteServico(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createProduto(@Request() req) {
    try {
      return await this.servicoService.createServico(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarProduto(@Request() req) {
    try {
      return await this.servicoService.atualizarServico(req.body);
    } catch (error) {
      return error;
    }
  }
}
