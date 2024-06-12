import { Injectable } from '@nestjs/common';
import { AgendaRepository } from 'src/repositories/agenda.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class AgendaService {
  constructor(
    private agenda: AgendaRepository,
  ) {}

  async atualizarAgenda(data: any) {
    try {
      const { id } = data;
      const dataAgenda = data;

      return await this.agenda.updateAgenda(
        Number(id),
        dataAgenda,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllAgenda(id) {
    try {
      return await this.agenda.getAgendaAll(Number(id));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createAgenda(data: any) {
    try {
      return await this.agenda.createAgenda(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteAgenda(data: any) {
    try {
      const id = data.id;

      return await this.agenda.deleteAgenda(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
