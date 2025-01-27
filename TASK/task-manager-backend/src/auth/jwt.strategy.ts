import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/users.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'TASK-MANAGEMENET-ASSIGNMENT', // Use an environment variable in production
    });
  }

  async validate(payload: any): Promise<User> {
    const user = await this.usersService.findByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException('User  not found');
    }
    return user; // Now this is guaranteed to be a User
  }
}
