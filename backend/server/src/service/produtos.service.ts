import { Injectable } from '@nestjs/common';
import { ProdutoRepository } from 'src/repositories/produtos.repository';
import { FileHelper } from 'src/helper/file.helper';
import { ErroBadRequest } from 'src/utils/msg.response';
@Injectable()
export class ProdutoService {
  constructor(
    private produtoRepositorio: ProdutoRepository,
    private fileHelper: FileHelper,
  ) {}

  async imageProduto(data: any) {
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
  async atualizarProduto(data: any) {
    try {
      const { id } = data;
      const dataProduto = data;

      return await this.produtoRepositorio.updateProduto(
        Number(id),
        dataProduto,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllProduto(empresa_configId) {
    try {
      return await this.produtoRepositorio.getProdutoAll(Number(empresa_configId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createProduto(data: any) {
    try {
      return await this.produtoRepositorio.createProduto(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteProduto(data: any) {
    try {
      const id = data.id;
      return await this.produtoRepositorio.deleteProduto(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
