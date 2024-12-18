import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) { }

  async getTaskAll() {
    return await this.prisma.task.findMany();
  }
  async getVisaoGeralTask(filter) {
    return await this.prisma.task.findMany({
      where: filter,
    });
  }
  async countTasksByEmpresa(empresa_configId) {
    const count = await this.prisma.task.count({
      where: {
        processo: {
          projeto: {
            empresa_config: {
              id: empresa_configId
            }
          }
        },
        OR: [{
          marcar_venda: null
        }, {
          marcar_venda: false
        }]
      },
    });
    return count;
  }
  async sumTasksByEmpresaValorInicial(empresa_configId) {
    try {
      const result = await this.prisma.task.aggregate({
        _sum: {
          valor_Inicial: true,
        },
        where: {
          processo: {
            projeto: {
              empresa_config: {
                id: empresa_configId
              }
            }
          },
          OR: [{
            marcar_venda: null
          }, {
            marcar_venda: false
          }]
        },
      });

      // Verifica se o resultado contém um valor válido
      const valorInicialSum = result._sum.valor_Inicial ?? 0;
      return valorInicialSum;

    } catch (error) {
      console.error('Erro ao calcular a soma dos valores iniciais:', error);
      return 0; // Retorna 0 em caso de erro
    }
  }
  async sumTasksByEmpresaValorFinal(empresa_configId) {
    try {
      const result = await this.prisma.task.aggregate({
        _sum: {
          valor_Final: true,
        },
        where: {
          processo: {
            projeto: {
              empresa_config: {
                id: empresa_configId
              }
            }
          },
          OR: [{
            marcar_venda: null
          }, {
            marcar_venda: false
          }]
        },

      });

      // Verifica se o resultado contém um valor válido
      const valorInicialSum = result._sum.valor_Final ?? 0;
      return valorInicialSum;

    } catch (error) {
      console.error('Erro ao calcular a soma dos valores iniciais:', error);
      return 0; // Retorna 0 em caso de erro
    }
  }

  async getByIdTask(id) {
    return await this.prisma.task.findFirst({
      where: {
        id: id,
      },
      include: {
        processo: {
          select: {
            title: true,
            projeto: true,
          },
        },
        sub_task: true,
        anotacoes: true,
        arquivos: true,
        Contacts: true,
        Users: true
      },
    });
  }
  async createTask(data) {
    return await this.prisma.task.create({
      data: data,
      include: {

        processo: {
          select: {
            projeto: {
              select: {
                id: true
              }
            }
          }
        }
      }
    });
  }
  async updateTask(id, data) {
    return await this.prisma.task.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteTask(id) {
    return await this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyTask(data) {
    return await this.prisma.task.createMany({
      data: data,
    });
  }
  async deleteManyTaskProcesso(id) {
    return await this.prisma.task.deleteMany({
      where: {
        processoId: id,
      },
    });
  }
}
