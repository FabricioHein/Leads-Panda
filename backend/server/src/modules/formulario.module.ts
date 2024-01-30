import { Module } from '@nestjs/common';
import { FormularioService } from '../service/formulario.service';
import { FormularioController } from '../controllers/formulario.controller';
import { FormularioAskRepository } from 'src/repositories/formulario-ask.repository';
import { FormularioDinamicoRepository } from 'src/repositories/formulario-dinamico.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { TaskRepository } from 'src/repositories/task.repository';

@Module({
  controllers: [FormularioController],
  providers: [
    FormularioService,
    FormularioAskRepository,
    FormularioDinamicoRepository,
    PrismaService,
    TaskRepository,
  ],
})
export class FormularioModule {}
