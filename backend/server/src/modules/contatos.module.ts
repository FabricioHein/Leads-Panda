import { Module } from '@nestjs/common';
import { ContatosService } from '../service/contatos.service';
import { ContatosController } from '../controllers/contatos.controllers';
import { ContatosRepository } from 'src/repositories/contatos.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';

@Module({
  controllers: [ContatosController],
  providers: [ContatosRepository, ContatosService, PrismaService],
})
export class ContatosModule {}
