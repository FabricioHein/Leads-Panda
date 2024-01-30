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

@Module({
  imports: [UsersModule, UsuariosModule, ImportarModule],
  controllers: [ConfigController],
  providers: [
    ConfigService,
    ConfigRepository,
    EnumRepository,
    PrismaService,
    ConfigClienteRepository,
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
