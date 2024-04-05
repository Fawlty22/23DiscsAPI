import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscRepository } from './disc.repository';
import { Disc } from '../../disc/entity/disc.entity';

@Injectable()
export class DiscService {
  constructor(
    @InjectRepository(DiscRepository)
    private readonly discRepository: DiscRepository,
  ) {}

  async createDisc(discData: any): Promise<Disc> {
    // Implement logic to create a new disc
    return await this.discRepository.save(discData);
  }

  async getDiscById(discId: number): Promise<Disc> {
    // Implement logic to get a disc by ID
    return await this.discRepository.findOne(discId);
  }

  // Add more methods for CRUD operations and business logic as needed
}
