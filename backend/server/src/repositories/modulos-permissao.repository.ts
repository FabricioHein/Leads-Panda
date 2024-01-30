import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModulosPermissaoRepository {
  constructor(private prisma: PrismaService) {}

  async createManyModulosUsuario(data) {
    return await this.prisma.permissao_modulos.createMany({
      data: data,
    });
  }
  async deleteManyModulosUsuario(id) {
    if (id) {
      return await this.prisma.permissao_modulos.deleteMany({
        where: {
          userId: {
            equals: id,
          },
        },
      });
    }
    return 'usuario sem id';
  }
}
