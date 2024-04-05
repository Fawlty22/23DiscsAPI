import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(userData: UserDto): Promise<User> {
   const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }

  async getUserById(userId: number): Promise<User> {
    return await this.userRepository.findOneBy({id:userId});
  }

  async updateUser(userData: User): Promise<User> {
    return await this.userRepository.save(userData);
  }

  async deleteUser(userId: number): Promise<DeleteResult> {
  return await this.userRepository.delete(userId);
  }

}
