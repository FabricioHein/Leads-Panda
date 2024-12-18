import { Module } from '@nestjs/common';

import { FileHelper } from 'src/helper/file.helper';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { PageLinkService } from 'src/service/pageLink.service';
import { PageLinkRepository } from 'src/repositories/pageLink.repository';
import { PageLinkController } from 'src/controllers/pageLink.controller';

@Module({
  controllers: [PageLinkController],
  providers: [PageLinkRepository, PageLinkService, PrismaService, FileHelper],
})
export class PageLinkModule {}
