import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt'; // Import JwtService
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService, // Inject JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Fetch the user by email
    const user = await this.usersService.findByEmail(email);

    if (!user) {
        return {
          success: false,
          message: "User not found",
          user: null,
        };
      }
  
      // Compare the password
      const matchedPassword = await bcrypt.compare(password, user.password);
  
      if (!matchedPassword) {
        return {
          success: false,
          message: "Invalid password",
          user: null,
        };
      }
  
      // Return the user if validation is successful
      const { password: _, ...userWithoutPassword } = user;
      return {
        success: true,
        message: "User validated successfully",
        user: userWithoutPassword,
      };
    } catch (error) {
      return {
        success: false,
        message: "Something went wrong",
        user: null,
        error,
      };
  }
  async login(user: User) {
    const payload = { email: user.email, sub: user.id }; // Create a payload with user info
    return {
      access_token: this.jwtService.sign(payload), // Generate the token dynamically
    };
  }
}
