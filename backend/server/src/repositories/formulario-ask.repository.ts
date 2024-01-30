import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FormularioAskRepository {
  constructor(private prisma: PrismaService) {}
  async getFormularioAskAll(formulario_dinamicoId) {
    return await this.prisma.form_ask.findMany({
      where: {
        formulario_dinamicoId: formulario_dinamicoId,
      },
    });
  }
  async getByIdFormularioAsk(id) {
    return await this.prisma.form_ask.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createFormularioAsk(data) {
    return await this.prisma.form_ask.create({
      data: data,
    });
  }

  async updateFormularioAsk(id, data) {
    return await this.prisma.form_ask.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteFormularioAsk(id) {
    return await this.prisma.form_ask.delete({
      where: {
        id: id,
      },
    });
  }
}
