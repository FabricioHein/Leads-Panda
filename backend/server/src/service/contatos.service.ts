import { Injectable } from '@nestjs/common';
import { ContatosRepository } from 'src/repositories/contatos.repository';
import { ErroBadRequest } from 'src/utils/msg.response';

@Injectable()
export class ContatosService {
  constructor(private contatosRepositorio: ContatosRepository) {}

  async atualizarContatos(data: any) {
    try {
      const { id } = data;
      const dataContatos = data;

      return await this.contatosRepositorio.updateContatos(
        Number(id),
        dataContatos,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByIdContatosChat(id) {
    try {
      const contatoChat = await this.contatosRepositorio.getByIdContatosChat(
        Number(id),
      );
      return contatoChat;
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByIdNumber(number) {
    try {
      const contatoNumber = await this.contatosRepositorio.getByIdNumber(
        number,
      );
      return contatoNumber;
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByIdName(name) {
    try {
      const contatoName = await this.contatosRepositorio.getByIdName(name);
      return contatoName;
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllContatos(id) {
    try {
      return await this.contatosRepositorio.getContatosAll(Number(id));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createContatos(data: any) {
    try {
      return await this.contatosRepositorio.createContatos(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteContatos(data: any) {
    try {
      const id = data.id;
      return await this.contatosRepositorio.deleteContatos(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
