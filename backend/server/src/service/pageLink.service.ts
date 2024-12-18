import { Injectable } from '@nestjs/common';

import { FileHelper } from 'src/helper/file.helper';
import { ErroBadRequest } from 'src/utils/msg.response';
import { PageLinkRepository } from 'src/repositories/pageLink.repository';
import { error } from 'console';
@Injectable()
export class PageLinkService {
  constructor(
    private pageLinkRepository: PageLinkRepository,
    private fileHelper: FileHelper,
  ) { }

  async imagePageLink(data: any) {
    try {
      const { fileBase64, caminho, fileName } = data;

      // let bufferfile = await this.fileHelper.base64ToBuffer(fileBase64);

      // const file = await this.fileHelper.gravarFileStorage(
      //   bufferfile,
      //   caminho,
      //   fileName,
      // );

      return 'file';
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async atualizarPageLink(data: any) {
    try {
      const dataPageLink = data;
      const atualizarPageLink = await this.pageLinkRepository.updatePageLink(
        dataPageLink
      );
      if (atualizarPageLink.id) {

        return this.getPageLinkById(atualizarPageLink.id)
      }
      return ErroBadRequest('error');
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getNomeLInkExiste(nome_link) {
    try {
      const linkCompany = await this.pageLinkRepository.getByIdPageNome(nome_link);
      if(linkCompany){
        return {
          msg: 'Nome Já Existe. Escolha outro nome.',
          error: true
        }
      }
      return {
        msg: 'Nome para URL Ok!.',
        error: false
      }
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getPageLinkByNome_link(nome_link) {
    try {
      return await this.pageLinkRepository.getByIdPageNome(nome_link);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getPageLinkById(id) {
    try {
      return await this.pageLinkRepository.getByIdPageLink(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllPageLink(empresa_configId) {
    try {
      return await this.pageLinkRepository.getPageLinkAll(Number(empresa_configId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createPageLink(data: any) {
    try {
      const createPageLink = await this.pageLinkRepository.createPageLink(data);

      if (createPageLink.id) {

        return this.getPageLinkById(createPageLink.id)
      }
      return ErroBadRequest('error');

    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deletePageLink(data: any) {
    try {
      const id = data.id;
      return await this.pageLinkRepository.deletePageLink(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
