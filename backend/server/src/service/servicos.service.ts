import { Injectable } from '@nestjs/common';
import { ServicoRepository } from 'src/repositories/servicos.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class ServicoService {
  constructor(private servicoRepository: ServicoRepository) {}

  async atualizarServico(data: any) {
    try {
      const { id } = data;
      const dataServico = data;

      return await this.servicoRepository.updateServico(
        Number(id),
        dataServico,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllServico() {
    try {
      return await this.servicoRepository.getServicoAll();
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createServico(data: any) {
    try {
      return await this.servicoRepository.createServico(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteServico(data: any) {
    try {
      const id = data.id;
      return await this.servicoRepository.deleteServico(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
