import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'TASK-MANAGEMENET-ASSIGNMENT', // Use an environment variable in production
      signOptions: { expiresIn: '6000s' }, // Token expiration time
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}