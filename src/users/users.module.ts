import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register the User entity
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export if other modules depend on this service
})
export class UsersModule {}
