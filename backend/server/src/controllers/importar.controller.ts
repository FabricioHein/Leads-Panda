import {
  Controller,
  Param,
  Post,
  Request,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { ImportarService } from '../service/importar.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/importar')
export class ImportarController {
  constructor(private readonly importarService: ImportarService) {}

  @UseGuards(JwtAuthGuard)
  @Post('file/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Param('id') id) {
    return await this.importarService.importarArquivo(file, id);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/:tabela')
  async importarDados(@Param('tabela') tabela, @Request() req) {
    try {
      return await this.importarService.importarDados(tabela, req);
    } catch (error) {
      return error;
    }
  }
}
