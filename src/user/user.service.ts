import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

}
