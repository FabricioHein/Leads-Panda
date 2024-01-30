import { Module } from '@nestjs/common';
import { ServicoService } from '../service/servicos.service';
import { ServicoController } from '../controllers/servicos.controllers';
import { ServicoRepository } from 'src/repositories/servicos.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';

@Module({
  controllers: [ServicoController],
  providers: [ServicoRepository, ServicoService, PrismaService],
})
export class ProdutoModule {}
