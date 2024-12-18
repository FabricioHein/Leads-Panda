import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';


import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PageLinkService } from 'src/service/pageLink.service';

@Controller('api/pageLink')
export class PageLinkController {
  constructor(private readonly pageLinkService: PageLinkService) { }
  @UseGuards(JwtAuthGuard)
  @Get('todos/:empresa_configId')
  async getAllPageLink(@Param('empresa_configId') empresa_configId) {
    try {
      return await this.pageLinkService.getAllPageLink(empresa_configId);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('get-nome-existe-link/:nome_link')
  async getNomeLInkExiste(@Param('nome_link') nome_link) {
    try {
      return await this.pageLinkService.getNomeLInkExiste(nome_link);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('getlink/:id')
  async getPageLinkById(@Param('id') id) {
    try {
      return await this.pageLinkService.getPageLinkById(id);
    } catch (error) {
      return error;
    }
  }
  @Get('getlink-company/:name')
  async getPageLinkByNome_link(@Param('name') name) {
    try {
      return await this.pageLinkService.getPageLinkByNome_link(name);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deletePageLink(@Request() req) {
    try {
      return await this.pageLinkService.deletePageLink(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPageLink(@Request() req) {
    try {
      return await this.pageLinkService.createPageLink(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarPageLink(@Request() req) {
    try {
      return await this.pageLinkService.atualizarPageLink(req.body);
    } catch (error) {
      return error;
    }
  }
}
