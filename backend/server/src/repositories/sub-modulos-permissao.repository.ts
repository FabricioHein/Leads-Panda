import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubModulosPermissaoRepository {
  constructor(private prisma: PrismaService) {}

  async createManySubModulosUsuario(data) {
    return await this.prisma.permissao_sub_modulos.createMany({
      data: data,
    });
  }
  async deleteManySubModulosUsuario(id) {
    return await this.prisma.permissao_sub_modulos.deleteMany({
      where: {
        userId: {
          equals: id,
        },
      },
    });
  }
}
