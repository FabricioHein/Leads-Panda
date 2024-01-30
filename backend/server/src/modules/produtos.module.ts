import { Module } from '@nestjs/common';
import { ProdutoService } from '../service/produtos.service';
import { ProdutosController } from '../controllers/produtos.controller';
import { ProdutoRepository } from 'src/repositories/produtos.repository';
import { FileHelper } from 'src/helper/file.helper';
import { PrismaService } from 'src/base/relacional/PrismaService';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutoRepository, ProdutoService, PrismaService, FileHelper],
})
export class ProdutoModule {}
