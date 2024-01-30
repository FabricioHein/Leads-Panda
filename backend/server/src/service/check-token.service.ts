import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckTokenService {
  tokenCheck() {
    return {
      token: true,
    };
  }
}
