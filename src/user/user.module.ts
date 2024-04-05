
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { User } from './entity/user.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])], 
  controllers: [UserController],
  providers: [UserService, UserRepository], 
})
export class UserModule {}
