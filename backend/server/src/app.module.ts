import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { ConfigModule } from './modules/config.module';
import { ProdutoModule } from './modules/produtos.module';
import { FornecedorModule } from './modules/fornecedores.module';
import { ProcessoModule } from './modules/processo.module';
import { TaskModule } from './modules/task.module';
import { ContatosModule } from './modules/contatos.module';
import { ClientesModule } from './modules/clientes.module';
import { ProjetoModule } from './modules/projeto.module';
import { FirebaseModule } from './modules/firebase.module';
import { FirebaseService } from './service/firebase.service';
import { ChatModule } from './modules/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static'; // New


@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client/dist'), // New
    // }),
    AuthModule,
    UsersModule,
    ConfigModule,
    ProdutoModule,
    FornecedorModule,
    ProcessoModule,
    TaskModule,
    ContatosModule,
    ClientesModule,
   
    ProjetoModule,
    FirebaseModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [FirebaseService],
})
export class AppModule {}
