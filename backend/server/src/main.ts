import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import * as passport from 'passport';
import {jwtConstants} from './auth/constants';
import { urlencoded, json } from 'express';

dotenv.config();

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  app.use(
    session({
      secret: jwtConstants,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(process.env.PORTA_SERVER);


}
bootstrap();
