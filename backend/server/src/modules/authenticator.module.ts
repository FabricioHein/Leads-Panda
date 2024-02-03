import { Module } from '@nestjs/common';
import { AuthenticatorService } from '../service/authenticator.service';
import { AuthenticatorController } from '../controllers/authenticator.controller';
import { UsuariosService } from 'src/service/usuarios.service';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { ModulosPermissaoRepository } from 'src/repositories/modulos-permissao.repository';
import { SubModulosPermissaoRepository } from 'src/repositories/sub-modulos-permissao.repository';
import { FirebaseService } from 'src/service/firebase.service';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { SubModulosRepository } from 'src/repositories/sub-modulos.repository';
import { ModulosRepository } from 'src/repositories/modulos.repository';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { SendgridService } from 'src/mail/sendgrid/sendgrid.service';


@Module({
  controllers: [AuthenticatorController],
  providers: [
    SendgridService,
    AuthenticatorService,
    UsuariosService,
    UsuarioRepository,
    ModulosPermissaoRepository,
    SubModulosPermissaoRepository,
    FirebaseService,
    ConfigClienteRepository,
    SubModulosRepository,
    ModulosRepository,
    PrismaService,
  ],
})
export class AuthenticatorModule {}
