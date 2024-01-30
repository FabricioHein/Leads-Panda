import {
  Controller,
  Put,
  Request,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '../service/config.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarConfig(@Request() req) {
    return await this.configService.atualizarConfig(req.body);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getDashboard/:clienteId')
  async getDashboard(@Param('clienteId') clienteId) {
    try {
      return await this.configService.getDashboard(clienteId);
    } catch (error) {
      return error;
    }
  }
}
