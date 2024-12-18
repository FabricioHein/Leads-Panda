import { Module } from '@nestjs/common';
import { AgendaService } from '../service/agenda.service';
import { AgendaController } from '../controllers/agenda.controller';
import { AgendaRepository } from 'src/repositories/agenda.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { TaskRepository } from 'src/repositories/task.repository';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { UsuarioRepository } from 'src/repositories/usuario.repository';

@Module({
  controllers: [AgendaController],
  providers: [TaskRepository, ClientesRepository, UsuarioRepository, AgendaRepository, AgendaService, PrismaService],
})
export class AgendaModule {}
