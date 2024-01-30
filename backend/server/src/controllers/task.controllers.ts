import {
  Controller,
  Post,
  Get,
  Put,
  Request,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from '../service/task.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @UseGuards(JwtAuthGuard)
  @Get('todos')
  async getAllTask() {
    try {
      return await this.taskService.getAllTask();
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getByIdTask(@Param('id') id, @Request() req) {
    try {
      return await this.taskService.getByIdTask(id);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('atualizaVendas')
  async atualizaVendas(@Request() req) {
    try {
      return await this.taskService.atualizaVendas(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteTask(@Request() req) {
    try {
      return await this.taskService.deleteTask(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createTask(@Request() req) {
    try {
      return await this.taskService.createTask(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('todos/subtask/:id')
  async getAllTaskSubtask(@Param('id') id, @Request() req) {
    try {
      return await this.taskService.getAllTaskSubtask(id);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('anexos')
  async getTaskAnexos(@Request() req) {
    try {
      return await this.taskService.getTaskAnexos(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete/deleteTaskAnexos')
  async deleteTaskAnexos(@Request() req) {
    try {
      return await this.taskService.deleteTaskAnexos(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete/deleteTaskSub')
  async deleteTaskSub(@Request() req) {
    try {
      return await this.taskService.deleteTaskSub(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async atualizarTask(@Request() req) {
    try {
      return await this.taskService.atualizarTask(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('subtask')
  async createTaskSub(@Request() req) {
    try {
      return await this.taskService.createTaskSub(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('anotacao')
  async createAnotacao(@Request() req) {
    try {
      return await this.taskService.createAnotacao(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('tasksubs/getVisaoGeralTaskSub/:clientId')
  async getVisaoGeralTaskSub(@Param('clientId') clientId, @Request() req) {
    try {
      return await this.taskService.getVisaoGeralTaskSub(req.body, clientId);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('getVisaoGeralTask/:clientId')
  async getVisaoGeralTask(@Param('clientId') clientId, @Request() req) {
    try {
      return await this.taskService.getVisaoGeralTask(req.body, clientId);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put('atualizarAnotacao')
  async atualizarAnotacao(@Request() req) {
    try {
      return await this.taskService.atualizarAnotacao(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put('atualizarTaskSub')
  async atualizarTaskSub(@Request() req) {
    try {
      return await this.taskService.atualizarTaskSub(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('delete/deleteAnotacao')
  async deleteAnotacao(@Request() req) {
    try {
      return await this.taskService.deleteAnotacao(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('todos/getAllAnotacao/:id')
  async getAllAnotacao(@Param('id') id, @Request() req) {
    try {
      return await this.taskService.getAllAnotacao(id);
    } catch (error) {
      return error;
    }
  }

  //motivos
  @UseGuards(JwtAuthGuard)
  @Get('getAllMotivos/:clienteId')
  async getAllMotivos(@Param('clienteId') clienteId, @Request() req) {
    try {
      return await this.taskService.getAllMotivos(clienteId);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('getByIdMotivos/:id')
  async getByIdMotivos(@Param('id') id, @Request() req) {
    try {
      return await this.taskService.getByIdMotivos(id);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put('atualizaMotivos')
  async atualizarMotivos(@Request() req) {
    try {
      return await this.taskService.atualizarMotivos(req.body);
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('createMotivos')
  async createMotivos(@Request() req) {
    try {
      return await this.taskService.createMotivos(req.body);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete/motivos')
  async deleteMotivos(@Request() req) {
    try {
      return await this.taskService.deleteMotivos(req.body);
    } catch (error) {
      return error;
    }
  }
}
