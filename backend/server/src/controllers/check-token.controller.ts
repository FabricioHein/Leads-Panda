import { Controller, Get } from '@nestjs/common';
import { CheckTokenService } from '../service/check-token.service';

@Controller('api/check-token')
export class CheckTokenController {
  constructor(private readonly checkTokenService: CheckTokenService) {}
  @Get()
  findAll() {
    return {
      token: true,
    };
  }
}
