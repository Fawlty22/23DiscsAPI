import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(userData: any): Promise<User> {
    // Implement logic to create a new user
    return await this.userRepository.save(userData);
  }

//   async getUserById(userId: number): Promise<User> {
//     // Implement logic to get a user by ID
//     return await this.userRepository.findOne(userId);
//   }

  // Add more methods for CRUD operations and business logic as needed
}
