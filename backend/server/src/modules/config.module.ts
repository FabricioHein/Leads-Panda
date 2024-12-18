import { Module } from '@nestjs/common';
import { ConfigService } from '../service/config.service';
import { ConfigController } from '../controllers/config.controller';
import { ConfigRepository } from 'src/repositories/config.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { UsersModule } from './users.module';
import { EnumRepository } from 'src/repositories/enum.repository';
import { UsuariosModule } from './usuarios.module';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { ImportarModule } from './importar.module';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { ChatRepository } from 'src/repositories/chat.repository';
import { TaskRepository } from 'src/repositories/task.repository';


@Module({
  imports: [UsersModule, UsuariosModule, ImportarModule],
  controllers: [ConfigController],
  providers: [
    ConfigService,
    ConfigRepository,
    EnumRepository,
    PrismaService,
    ConfigClienteRepository,
    ClientesRepository,
    ChatRepository,
    TaskRepository

  ],
  exports: [ConfigService],
})
export class ConfigModule {}
