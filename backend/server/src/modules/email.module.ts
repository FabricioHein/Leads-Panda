import { Module } from '@nestjs/common';
import { EmailService } from '../service/email.service';
import { EmailController } from '../controllers/email.controller';
import { PrismaService } from 'src/base/relacional/PrismaService';

@Module({
  controllers: [EmailController],
  providers: [EmailService, PrismaService],
})
export class EmailModule {}
