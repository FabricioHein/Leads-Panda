import { Injectable } from '@nestjs/common';
import { ProjetoRepository } from 'src/repositories/projeto.repository';
import { TaskRepository } from 'src/repositories/task.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class ProjetoService {
  constructor(
    private projetoRepository: ProjetoRepository,
    private taskRepository: TaskRepository,
  ) {}

  async atualizarProjeto(data: any) {
    try {
      const { id } = data;
      const dataProjeto = data;

      return await this.projetoRepository.updateProjeto(
        Number(id),
        dataProjeto,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllProjeto(id) {
    try {
      return await this.projetoRepository.getProjetoAll(Number(id));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllProjetoById(id) {
    try {
      return await this.projetoRepository.getByIdProjetoEtapa(Number(id));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createProjeto(data: any) {
    try {
      return await this.projetoRepository.createProjeto(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteProjeto(data: any) {
    try {
      const id = data.id;

      await this.taskRepository.deleteManyTaskProcesso(id);

      return await this.projetoRepository.deleteProjeto(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
