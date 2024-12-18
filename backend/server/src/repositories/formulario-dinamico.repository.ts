import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FormularioDinamicoRepository {
  constructor(private prisma: PrismaService) {}
  async getFormularioDinamicoAll(empresa_configId) {
    return await this.prisma.formulario_dinamico.findMany({
      where: {
        empresa_configId: empresa_configId,
      },
      include: {
        form_ask: true,
      },
    });
  }
  async getByURLFormularioDinamico(url_formulario) {
    return await this.prisma.formulario_dinamico.findFirst({
      where: {
        url_formulario: url_formulario,
      },
    });
  }
  async getByURLFormularioDinamicoOpen(url_formulario) {
    return await this.prisma.formulario_dinamico.findFirst({
      where: {
        url_formulario: url_formulario,
      },
    });
  }
  async getByIdFormularioDinamico(id) {
    return await this.prisma.formulario_dinamico.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createFormularioDinamico(data) {
    return await this.prisma.formulario_dinamico.create({
      data: data,
    });
  }

  async updateFormularioDinamico(id, data) {
    return await this.prisma.formulario_dinamico.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteFormularioDinamico(id) {
    return await this.prisma.formulario_dinamico.delete({
      where: {
        id: id,
      },
    });
  }
}
