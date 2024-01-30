import { Module } from '@nestjs/common';
import { ImportarService } from '../service/importar.service';
import { ImportarController } from '../controllers/importar.controller';
import { FileHelper } from 'src/helper/file.helper';
@Module({
  controllers: [ImportarController],
  providers: [ImportarService, FileHelper],
})
export class ImportarModule {}
