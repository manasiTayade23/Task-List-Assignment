import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Task } from './task.entity';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/createTask')
  @UseGuards(JwtAuthGuard)
  async create(@Req() req: any, @Body() task: Task) {
    console.log('inside ');

    const userId = req.user.id;
    return await this.tasksService.create(task, userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Req() req) {
    return await this.tasksService.findAll(req.userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() task: Partial<Task>) {
    return await this.tasksService.update(id, task);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: number) {
    return await this.tasksService.remove(id);
  }
}
