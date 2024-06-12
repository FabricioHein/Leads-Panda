
import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient  {
  async onModuleInit() {
    //Conecta no banco
    await this.$connect();
  }
  async close(app: any) {
    //Fecha
    await app.close();
  }
}
