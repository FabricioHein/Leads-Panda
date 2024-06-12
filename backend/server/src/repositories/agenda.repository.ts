import { PrismaService } from 'src/base/relacional/PrismaService';
import AgendaRetornoModel from 'src/infra/DTO/agenda-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AgendaRepository {
  constructor(private prisma: PrismaService) { }

  async getAgendaAll(userId) {
    const userAgendas = await this.prisma.agenda.findMany({
      where: {
          Users: {
              some: {
                  userId: userId
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
  async createAgenda(data) {
    
    return await this.prisma.agenda.create({
      data: {
        title: data.title,
        description: data.description,
        className: data.className,
        status: data.status,
        date_start: data.date_start,
        date_end: data.date_end,
        Users: {
          create: data.userIds.map(userId => ({
            Users: {
              connect: { id: userId }
            }
          }))
        }
      }
    });

  }
  async updateAgenda(id, data) {
    console.log(id, data)
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
