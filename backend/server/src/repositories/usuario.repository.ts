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
          // {
          //   nome: username,
          // },
          {
            email: username,
          },
        ],
      },
    });

    if (user) return user;
  }
  async getUsuariaClienteAgendamento(empresa_configId) {
    console.log(empresa_configId)
    return await this.prisma.users.findMany({
      where: {
        empresa_configId: Number(empresa_configId),
      },
      select:{
        nome: true,
        id: true        
      }
      
    });
  }

  async getUserAll(empresa_configId) {
    return await this.prisma.users.findMany({
      where: {
        empresa_configId: empresa_configId,
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
        email: email
      },
    });
  }
  async createUser(empresa_configId, data) {
    return await this.prisma.users.create({
      data: {
        ...data,
        empresa_config: {
          connect: { id: empresa_configId } 
        }
      },
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
    return await this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  }
  async update(data) {
    return await this.prisma.users.update(data);
  }

  async resetPasswordFindUnique(data) {
    return await this.prisma.resetPassword.findFirst(data);
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
  async findVerificationCreateCode(code){
    return  await this.prisma.emailVerification.findUnique({
      where:{
       code: code
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
