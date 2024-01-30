import { Module } from '@nestjs/common';
import { FornecedorService } from '../service/fornecedores.service';
import { FornecedorsController } from '../controllers/fornecedores.controllers';
import { FornecedorRepository } from 'src/repositories/fornecedor.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';

@Module({
  controllers: [FornecedorsController],
  providers: [FornecedorRepository, FornecedorService, PrismaService],
})
export class FornecedorModule {}
