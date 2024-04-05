import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: UserDto): Promise<User> {
    return await this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') userId: number): Promise<any> {
    return await this.userService.getUserById(userId);
  }

  // Add more controller methods for handling HTTP requests as needed
}
