import { Module } from '@nestjs/common';
import { CheckTokenService } from '../service/check-token.service';
import { CheckTokenController } from '../controllers/check-token.controller';

@Module({
  controllers: [CheckTokenController],
  providers: [CheckTokenService],
})
export class CheckTokenModule {}
