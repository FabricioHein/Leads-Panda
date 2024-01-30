import { Injectable } from '@nestjs/common';
import { FornecedorRepository } from 'src/repositories/fornecedor.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class FornecedorService {
  constructor(private fornecedorRepositorio: FornecedorRepository) {}

  async atualizarFornecedor(data: any) {
    try {
      const { id } = data;
      const dataFornecedor = data;

      return await this.fornecedorRepositorio.updateFornecedor(
        Number(id),
        dataFornecedor,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllFornecedor() {
    try {
      return await this.fornecedorRepositorio.getFornecedorAll();
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createFornecedor(data: any) {
    try {
      return await this.fornecedorRepositorio.createFornecedor(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteFornecedor(data: any) {
    try {
      const id = data.id;
      return await this.fornecedorRepositorio.deleteFornecedor(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
