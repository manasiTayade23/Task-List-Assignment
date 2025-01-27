import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() user: User) {
    const createUser = this.usersService.create(user.email, user.password);
    return createUser;
  }
}
