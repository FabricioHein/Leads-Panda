import { Module } from '@nestjs/common';
import { AgendaService } from '../service/agenda.service';
import { AgendaController } from '../controllers/agenda.controller';
import { AgendaRepository } from 'src/repositories/agenda.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { TaskRepository } from 'src/repositories/task.repository';

@Module({
  controllers: [AgendaController],
  providers: [TaskRepository, AgendaRepository, AgendaService, PrismaService],
})
export class AgendaModule {}
