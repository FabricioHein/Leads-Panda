import { Injectable } from '@nestjs/common';
import { FileHelper } from 'src/helper/file.helper';
import { ErroBadRequest } from 'src/utils/msg.response';
@Injectable()
export class ImportarService {
  constructor() {}
  async importarArquivo(file, id) {
    try {
      
      return await FileHelper.gravarFileStorage(
        file.buffer,
        id,
        file.originalname,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async importarDados(params, req) {
    try {
      return 'data';
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
