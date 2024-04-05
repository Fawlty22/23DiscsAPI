import { Controller, Post, Body, Get, Param, Put, Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { DeleteResult } from 'typeorm';

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

  @Put(':id')
  async updateUser(@Param('id') userId: number, @Body() user: User): Promise<User> {
    return await this.userService.updateUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') UserId: number): Promise<DeleteResult> {
    return await this.userService.deleteUser(UserId);
  }
}
