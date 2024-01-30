import { Module } from '@nestjs/common';
import { TaskService } from '../service/task.service';
import { TaskController } from '../controllers/task.controllers';
import { TaskRepository } from 'src/repositories/task.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { TaskSubRepository } from 'src/repositories/tasksub.repository';
import { AnotacaoRepository } from 'src/repositories/anotacoes.repository';
import { ArquivosRepository } from 'src/repositories/arquivos.repository';
import { VendaRepository } from 'src/repositories/venda.repository';
import { MotivosRepository } from 'src/repositories/motivos.repository';
import { LogTasksRepository } from '../repositories/logTask.repositoy';

@Module({
  controllers: [TaskController],
  providers: [
    TaskRepository,
    TaskService,
    PrismaService,
    TaskSubRepository,
    AnotacaoRepository,
    ArquivosRepository,
    VendaRepository,
    MotivosRepository,
    LogTasksRepository,
  ],
})
export class TaskModule {}
