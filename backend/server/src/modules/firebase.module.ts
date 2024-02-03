import { Module } from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';
import { UsuariosController } from '../controllers/usuarios.controller';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { ModulosPermissaoRepository } from 'src/repositories/modulos-permissao.repository';
import { SubModulosPermissaoRepository } from 'src/repositories/sub-modulos-permissao.repository';
import { FirebaseService } from 'src/service/firebase.service';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { ModulosRepository } from 'src/repositories/modulos.repository';
import { SubModulosRepository } from 'src/repositories/sub-modulos.repository';
import { SendgridService } from 'src/mail/sendgrid/sendgrid.service';
@Module({
  controllers: [UsuariosController],
  providers: [
    SendgridService,
    FirebaseService,
    UsuariosService,
    UsuarioRepository,
    PrismaService,
    ModulosPermissaoRepository,
    SubModulosPermissaoRepository,
    ConfigClienteRepository,
    ModulosRepository,
    SubModulosRepository,
  ],
})
export class FirebaseModule {}
