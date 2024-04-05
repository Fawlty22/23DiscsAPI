import { EntityRepository, Repository } from 'typeorm';
import { Disc } from '../../disc/entity/disc.entity';

@EntityRepository(Disc)
export class DiscRepository extends Repository<Disc> {
  // You can add custom methods or functionality here if needed
}