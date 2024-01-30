import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EnumRepository {
  constructor(private prisma: PrismaService) {}
  async getSexo() {
    return await this.prisma.sexo.findMany();
  }
  async getOpcao() {
    return await this.prisma.opcao.findMany();
  }

  async getUsuario() {
    return await this.prisma.tipoUsuario.findMany();
  }
  async getProcessosCrmLista() {
    return await this.prisma.processo.findMany();
  }
}
