import { Module } from '@nestjs/common';
import { ClientesService } from '../service/clientes.service';
import { ClientesController } from '../controllers/clientes.controller';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { HistoricoClienteRepository } from 'src/repositories/historico-cliente.repository';

@Module({
  controllers: [ClientesController],
  providers: [
    ClientesRepository,
    HistoricoClienteRepository,
    ClientesService,
    PrismaService,
  ],
  imports: [],
})
export class ClientesModule {}
