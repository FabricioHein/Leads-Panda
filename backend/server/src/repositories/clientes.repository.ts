import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesRepository {
  constructor(private prisma: PrismaService) {}
  
  async getByIdName(name) {
    return await this.prisma.cliente.findMany({
      where: {
        nome: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }

  async countClientesByEmpresa(empresa_configId) {
    const count = await this.prisma.cliente.count({
      where: {
        empresa_configId: empresa_configId        

      },
    });
    return count;
  }
  

  async getByIdCPF(cpf, empresa_configId) {
    return await this.prisma.cliente.findFirst({
      where: {        
        cpf: cpf,
        empresa_configId: empresa_configId
      }, select:{
        id: true,
        nome: true,
        cpf: true
      },
    });
  }

  async getClientesAll(empresa_configId) {
    return await this.prisma.cliente.findMany({
      where: {
        empresa_configId: empresa_configId,
      },
      include: {
        historico_cliente: {
          orderBy: {
            created_at: 'asc',
          },
          select: {
            valor: true,
            operador: true,
            created_at: true,
          },
        },
        sexo: true,
      },
    });
  }
  async getByIdClientes(id) {
    return await this.prisma.cliente.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createClientes(data) {
    console.log(data);
    return await this.prisma.cliente.create({
      data: data,
    });
  }

  async updateClientes(id, data) {
    return await this.prisma.cliente.update({
      where: {
        id: id,
      },
      data: data,
    });
  }


  async deleteClientes(id) {
    return await this.prisma.cliente.delete({
      where: {
        id: id,
      },
    });
  }
}
