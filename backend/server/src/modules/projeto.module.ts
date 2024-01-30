import { Module } from '@nestjs/common';
import { ProjetoService } from '../service/projeto.service';
import { ProjetoController } from '../controllers/projeto.controllers';
import { ProjetoRepository } from 'src/repositories/projeto.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { TaskRepository } from 'src/repositories/task.repository';

@Module({
  controllers: [ProjetoController],
  providers: [TaskRepository, ProjetoRepository, ProjetoService, PrismaService],
})
export class ProjetoModule {}
