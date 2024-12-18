import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigRepository {
  constructor(private prisma: PrismaService) {}
  async getByIdUserConfig(id) {
    try {
      return await this.prisma.users.findFirst({
        where: {
          id: id,
        },
        select: {
          id: true,
          nome: true,
          sobrenome: true,
          isAdmin: true,
          cpf: true,
          telefone: true,
          email: true,
          linkFoto: true         
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getByIdUserEmpresa(id) {
    try {
      return await this.prisma.empresa_config.findFirst({
        where: {
          Users: {
            some: {
              id: id,
            },
          },
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getPermissaoModulos(id) {
    try {
      return this.prisma.modulo.findMany({
        where: {
          permissao_modulos: {
            some: {
              userId: {
                equals: id,
              },
            },
          },
        },
        include: {
          permissao_modulos: {
            select: {
              ver: true,
            },
          },
          subModulo: {
            include: {
              permissao_sub_modulos: {
                select: {
                  id: true,
                  editar: true,
                  deletar: true,
                  ver: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getPermissaoSubModulos(id) {
    try {
      return this.prisma.subModulo.findMany({
        where: {
          permissao_sub_modulos: {
            some: {
              userId: {
                equals: id,
              },
            },
          },
        },
        include: {
          permissao_sub_modulos: {
            select: {
              id: true,
              ver: true,
              deletar: true,
              editar: true,
            },
          },
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getModulosSistema() {
    return await this.prisma.modulo.findMany({
      include: {
        subModulo: true,
      },
    });
  }

  async getPermissaoDepartamento() {
    return '';
  }
  async getPermissaoSecretaria() {
    return '';
  }
}
