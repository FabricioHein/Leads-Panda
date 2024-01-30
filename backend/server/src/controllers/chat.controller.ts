import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ChatService } from '../service/chat.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) { }

  @UseGuards(JwtAuthGuard)
  // chat create service
  @Get('todos/getAllChatInfo/:clienteId')
  async getAllChatInfo(@Param('clienteId') clienteId) {
    try {
      return await this.chatService.getAllChatInfo(clienteId);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getChatInfo/:uuid')
  async getChatInfo(@Param('uuid') uuid) {
    try {
      return await this.chatService.getChatInfoByUuid(uuid);
    } catch (error) {
      return error;
    }
  }

  @Get('/get-info-chat/:uuid')
  async getChatInfoData(@Param('uuid',) uuid,) {
    try {
      return await this.chatService.getChatInfoByUuidCliente(uuid);
    } catch (error) {
      return error;
    }
  }

  @Get('/getChat/:uuid')
  async getChaByUuid(@Param('uuid',) uuid,) {
    try {
      return await this.chatService.getChaByUuid(uuid);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('deletechatInfo')
  async deletechatInfo(@Request() req) {
    try {
      return await this.chatService.deletechatInfo(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('createchatInfo')
  async createchatInfo(@Request() req) {
    try {
      return await this.chatService.createchatInfo(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('updatechatInfo')
  async updatechatInfo(@Request() req) {
    try {
      return await this.chatService.updatechatInfo(req.body);
    } catch (error) {
      return error;
    }
  }

  // chat msgm service

  @UseGuards(JwtAuthGuard)
  @Get('todos/open/:clienteId')
  async getAllChatOpen(@Param('clienteId') clienteId) {
    try {
      return await this.chatService.getAllChatOpen(clienteId);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('todos/close/:clienteId')
  async getAllChatClose(@Param('clienteId') clienteId) {
    try {
      return await this.chatService.getAllChatClose(clienteId);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('updatechatInfo/:uuid')
  async getChatByUuid(@Param('uuid') uuid) {
    try {
      return await this.chatService.updatechatInfo(uuid);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('chatAllMsg/:chatId')
  async getAllChatMsgm(@Param('chatId') chatId) {
    try {
      return await this.chatService.getAllChatMsgm(chatId);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteChat(@Request() req) {
    try {
      return await this.chatService.deleteChat(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createChat(@Request() req) {
    try {
      return await this.chatService.createChat(req.body);
    } catch (error) {
      return error;
    }
  }

  @Get('updatechatInfo/uuid')
  async getByChatUuidMessages(@Param('uuid') uuid) {
    try {
      return await this.chatService.updatechatInfo(uuid);
    } catch (error) {
      return error;
    }
  }

  @Post('createMessages') 
  async createMessages(@Request() req) {
    try {
      return await this.chatService.createMessages(req.body);
    } catch (error) {
      return error;
    }
  }

  @Post('novoChat')
  async novoChat(@Request() req) {
    try {
      return await this.chatService.novoChat(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarChat(@Request() req) {
    try {
      return await this.chatService.atualizarChat(req.body);
    } catch (error) {
      return error;
    }
  }

  @Get('getByChatUuidMessages/:uuid')
  async getAllChatMsgmOpenLast(@Param('uuid') uuid) {
    try {
      return await this.chatService.getByChatUuidMessages(uuid);
    } catch (error) {
      return error;
    }
  }
}
