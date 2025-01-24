import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(task: Task,userId): Promise<Task> {
    task.userId = userId;
    const createUser =  await this.tasksRepository.save(task);
    
    return createUser;
  }

  async findAll(userId: number): Promise<Task[]> {
    const data =  this.tasksRepository.find({ where: { userId } });
    return data;
    
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    const existingTask = await this.tasksRepository.findOne({ where: { id } }); // Use an object with where clause
    if (!existingTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    
    // Update the existing task with the new values
    await this.tasksRepository.update(id, task);
    
    // Fetch the updated task
    const updatedTask = await this.tasksRepository.findOne({ where: { id } }); // Use an object with where clause
    if (!updatedTask) {
      throw new NotFoundException(`Task with ID ${id} not found after update`);
    }
    
    return updatedTask; // Now this is guaranteed to be a Task
  }

  async remove(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}