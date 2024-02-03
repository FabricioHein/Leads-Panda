import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';
import { compareDesc } from 'date-fns';

@Injectable()
export class UsuarioRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            nome: username,
          },
          {
            email: username,
          },
        ],
      },
    });

    if (user) return user;
  }

  async getUserAll(clienteId) {
    return await this.prisma.users.findMany({
      where: {
        clienteId: clienteId,
      },
      include: {
        permissao_modulos: {
          include: {
            modulo: {
              include: {
                subModulo: {
                  select: {
                    id: true,
                    permissao_sub_modulos: {
                      select: {
                        ver: true,
                        deletar: true,
                        editar: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  }
  async getByIdUser(id) {
    return await this.prisma.users.findFirst({
      where: {
        id: id,
      },
    });
  }
  async getByEmailUser(email) {
    return await this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  }
  async createUser(data) {
    return await this.prisma.users.create({
      data: data,
    });
  }

  async updateUser(id, data) {
    return await this.prisma.users.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteUser(id) {
    return await this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
  async findUnique(email) {
    return await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }
  async update(data) {
    return await this.prisma.users.update(data);
  }

  async resetPasswordFindUnique(data) {
    return await this.prisma.resetPassword.findUnique(data);
  }
  async createResetPassword(data) {
    return await this.prisma.resetPassword.create(data);
  }
  async deleteResetPassword(data) {
    return await this.prisma.resetPassword.delete(data);
  }
  async emailVerificationCreate(data){
    return await this.prisma.emailVerification.create(data);
  }
  async findVerificationCreate(email){
    return  await this.prisma.emailVerification.findUnique({
      where:{
        email: email
      }
    })
  }
  async deletVficationCreate(email){
    return  await this.prisma.emailVerification.delete({
      where:{
        email: email
      }
    })
  }
}
