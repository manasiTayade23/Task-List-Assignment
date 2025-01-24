import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';
import { User } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'new_password',
      database: 'taskmanager',
      entities: [User , Task],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}