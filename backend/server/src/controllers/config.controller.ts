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
  @Get('dashboard/:empresa_configId')
  async getDashboard(@Param('empresa_configId') empresa_configId) {
    try {
      return await this.configService.getDashboard(empresa_configId);
    } catch (error) {
      return error;
    }
  }
}
