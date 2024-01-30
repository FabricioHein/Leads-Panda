import { Module } from '@nestjs/common';
import { ProcessoService } from '../service/processo.service';
import { ProcessoController } from '../controllers/processo.controller';
import { ProcessoRepository } from 'src/repositories/processo.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { TaskRepository } from 'src/repositories/task.repository';

@Module({
  controllers: [ProcessoController],
  providers: [
    TaskRepository,
    ProcessoRepository,
    ProcessoService,
    PrismaService,
  ],
})
export class ProcessoModule {}
