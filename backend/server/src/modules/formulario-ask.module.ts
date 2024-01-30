import { Module } from '@nestjs/common';
import { FormularioService } from '../service/formulario.service';
import { FormularioAskController } from '../controllers/formulario-ask.controller';
import { FormularioDinamicoRepository } from 'src/repositories/formulario-dinamico.repository';
import { FormularioAskRepository } from 'src/repositories/formulario-ask.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { TaskRepository } from 'src/repositories/task.repository';

@Module({
  controllers: [FormularioAskController],
  providers: [
    FormularioService,
    FormularioDinamicoRepository,
    FormularioAskRepository,
    PrismaService,
    TaskRepository,
  ],
})
export class FormularioAskModule {}
