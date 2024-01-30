import { Injectable } from '@nestjs/common';
import { ProcessoRepository } from 'src/repositories/processo.repository';
import { TaskRepository } from 'src/repositories/task.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class ProcessoService {
  constructor(
    private processoRepository: ProcessoRepository,
    private taskRepository: TaskRepository,
  ) {}

  async atualizarProcesso(data: any) {
    try {
      const { id } = data;
      const dataProcesso = data;

      return await this.processoRepository.updateProcesso(
        Number(id),
        dataProcesso,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllProcesso(id) {
    try {
      return await this.processoRepository.getProcessoAll(Number(id));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createProcesso(data: any) {
    try {
      return await this.processoRepository.createProcesso(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteProcesso(data: any) {
    try {
      const id = data.id;

      await this.taskRepository.deleteManyTaskProcesso(id);

      return await this.processoRepository.deleteProcesso(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
