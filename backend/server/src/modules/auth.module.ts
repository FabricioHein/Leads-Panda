import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { jwtConstants } from 'src/auth/constants';
import { UsersModule } from './users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from 'src/modules/config.module';
import { FirebaseService } from 'src/service/firebase.service';
import { CheckTokenModule } from './check-token.module';
import { AuthenticatorModule } from './authenticator.module';
import { FormularioModule } from './formulario.module';
import { FormularioAskModule } from './formulario-ask.module';

import { LocalStrategy } from 'src/auth/local.strategy';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { UsuarioRepository } from 'src/repositories/usuario.repository';

import { PrismaService } from 'src/base/relacional/PrismaService';

import { GoogleStrategy } from '../auth/google.strategy';
import { AuthController } from '../controllers/auth.controller';
import { UsuariosService } from 'src/service/usuarios.service';
import { SendgridService } from 'src/mail/sendgrid/sendgrid.service';


import { AuthenticatorService } from '../service/authenticator.service';
import { ModulosPermissaoRepository } from 'src/repositories/modulos-permissao.repository';
import { SubModulosPermissaoRepository } from 'src/repositories/sub-modulos-permissao.repository';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { SubModulosRepository } from 'src/repositories/sub-modulos.repository';
import { ModulosRepository } from 'src/repositories/modulos.repository';


@Module({
  imports: [

    UsersModule,
    ConfigModule,
    PassportModule,
    CheckTokenModule,
    AuthenticatorModule,
    FormularioModule,
    FormularioAskModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10d' },
    }),
  ],
  providers: [
    UsuariosService,
    SendgridService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UsuarioRepository,
    PrismaService,
    GoogleStrategy,

    UsuariosService,

    FirebaseService,
    PrismaService,

 
    AuthenticatorService,
   
    ModulosPermissaoRepository,
    SubModulosPermissaoRepository,
    FirebaseService,
    ConfigClienteRepository,
    SubModulosRepository,
    ModulosRepository,
    PrismaService,

  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
