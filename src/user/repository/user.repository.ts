import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../user/entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // You can add custom methods or functionality here if needed
}