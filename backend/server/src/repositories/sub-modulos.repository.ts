import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubModulosRepository {
  constructor(private prisma: PrismaService) {}

  async getAllSubModulos() {
    return await this.prisma.subModulo.findMany();
  }
}
