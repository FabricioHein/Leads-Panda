import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ProdutoService } from '../service/produtos.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/produto')
export class ProdutosController {
  constructor(private readonly produtoService: ProdutoService) {}
  @UseGuards(JwtAuthGuard)
  @Get('todos/:empresa_configId')
  async getAllProduto(@Param('empresa_configId') empresa_configId) {
    try {
      return await this.produtoService.getAllProduto(empresa_configId);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteProduto(@Request() req) {
    try {
      return await this.produtoService.deleteProduto(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('imageProduto')
  async imageProduto(@Request() req) {
    try {
      return await this.produtoService.imageProduto(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createProduto(@Request() req) {
    try {
      return await this.produtoService.createProduto(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarProduto(@Request() req) {
    try {
      return await this.produtoService.atualizarProduto(req.body);
    } catch (error) {
      return error;
    }
  }
}
