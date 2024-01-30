import { Controller, Post, Get, Put, Request, UseGuards } from '@nestjs/common';
import { FornecedorService } from '../service/fornecedores.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/fornecedor')
export class FornecedorsController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @UseGuards(JwtAuthGuard)
  @Get('todos')
  async getAllFornecedor() {
    try {
      return await this.fornecedorService.getAllFornecedor();
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteFornecedor(@Request() req) {
    try {
      return await this.fornecedorService.deleteFornecedor(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createFornecedor(@Request() req) {
    try {
      return await this.fornecedorService.createFornecedor(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarFornecedor(@Request() req) {
    try {
      return await this.fornecedorService.atualizarFornecedor(req.body);
    } catch (error) {
      return error;
    }
  }
}
