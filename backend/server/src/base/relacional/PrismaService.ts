import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    //Conecta no banco
    await this.$connect();
  }
  async close(app: INestApplication) {
    //Fecha
    await app.close();
  }
}
