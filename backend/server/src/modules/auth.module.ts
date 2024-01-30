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

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    PassportModule,
    CheckTokenModule,
    AuthenticatorModule,
    FormularioModule,
    FormularioAskModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10d' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UsuarioRepository,
    PrismaService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
