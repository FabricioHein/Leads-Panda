import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModulosRepository {
  constructor(private prisma: PrismaService) {}

  async getAllModulos() {
    return await this.prisma.modulo.findMany();
  }
}
