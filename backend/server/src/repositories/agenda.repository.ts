import { PrismaService } from 'src/base/relacional/PrismaService';
import AgendaRetornoModel from 'src/infra/DTO/agenda-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AgendaRepository {
  constructor(private prisma: PrismaService) { }

  async getAgendaByDataUsuario(atendimentoId, date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    console.log(atendimentoId, startOfDay, endOfDay)


    const userAgendas = await this.prisma.agenda.findMany({
      where: {
        AND: [
          {
            date_start: {
              gte: startOfDay,
              lte: endOfDay
            }
          },
          {
            Users: {
              some: {
                id: atendimentoId
              }
            }
          }
        ]
      },
      include: {
        Users: true
      }
    });

    // Formatar as agendas usando AgendaModel
    const formattedAgendas = userAgendas.map(agendaData => {
      const formattedData = new AgendaRetornoModel({
        ...agendaData,
        date_start: new Date(agendaData.date_start),
        date_end: new Date(agendaData.date_end),
        userIds: agendaData.Users.map(user => user.userId)
      });
      return formattedData;
    });

    return formattedAgendas;

  };

  async getAgendaAll(empresa_configId) {
    const userAgendas = await this.prisma.agenda.findMany({
      where: {
        Users: {
          some: {
            Users: {
              empresa_configId: empresa_configId
            }
          }
        }
      },
      include: {
        Users: true
      }
    });

    // Formatar as agendas usando AgendaModel
    const formattedAgendas = userAgendas.map(agendaData => {
      const formattedData = new AgendaRetornoModel({
        ...agendaData,
        date_start: new Date(agendaData.date_start),
        date_end: new Date(agendaData.date_end),
        userIds: agendaData.Users.map(user => user.userId)
      });
      return formattedData;
    });

    return formattedAgendas;

  }
  async getByIdAgenda(id) {
    return await this.prisma.agenda.findFirst({
      where: {
        id: id,
      },
    });
  }
  async crearAgendamentoExterno(data) {

    return await this.prisma.agenda.create({
      data: {
        ...data,
        date_end: data.date_end,
        cliente: {
          connect: data.clientIds.map(clientId => ({
            id: clientId
          }))
        },
        users: {
          connect: data.users.map(userId => ({
            id: userId
          }))
        }
      }
    });

  }
  async createAgenda(data) {

    const newAgenda = await this.prisma.agenda.create({
      data: {
        title: data.title,
        description: data.description,
        className: data.className,
        status: data.status,
        date_start: data.date_start,
        date_end: data.date_end
      }
    });

    // Verificar se os empresa_configIds existem na tabela cliente

    // Conectar clientes à agenda
    await Promise.all(
      (data.clientIds || []).map(async (id) => {
        const validempresa_configIds = await this.prisma.cliente.findMany({
          where: {
            id: { in: data.cliente }
          },
          select: {
            id: true
          }
        });

        if(validempresa_configIds){
          await this.prisma.agenda_cliente.create({
            data: {
              agendaId: newAgenda.id,
              empresa_configId: id
            },
          });
        }
        
      })
    );

    // Conectar usuários à agenda
    await Promise.all(
      data.userIds.map(async (userId) => {
        await this.prisma.agenda_user.create({
          data: {
            agendaId: newAgenda.id,
            userId: userId
          },
        });
      })
    );

    return newAgenda;

  }
  async updateAgenda(id, data) {
    const updatedAgenda = await this.prisma.agenda.update({
      where: { id: id },
      data: {
        title: data.title,
        description: data.description,
        className: data.className,
        status: data.status,
        date_start: data.date_start,
        date_end: data.date_end,
        Users: {
          deleteMany: {
            agendaId: id
          },
          create: data.userIds.map(userId => ({
            Users: {
              connect: { id: userId }
            }
          }))
        }
      },
      include: {
        Users: true
      }
    });

    return updatedAgenda;
  }

  async deleteAgenda(id) {
    await this.prisma.agenda.update({
      where: { id: id },
      data: {
        Users: {
          deleteMany: {
            agendaId: id
          }
        }
      }
    });

    return await this.prisma.agenda.delete({
      where: {
        id: id,
      },
    });
  }

  async createManyAgenda(data) {
    return await this.prisma.agenda.createMany({
      data: data,
    });
  }
  async deleteManyTaskSubSub(id) {
    return await this.prisma.agenda.deleteMany({
      where: {
        id: id,
      },
    });
  }
}
