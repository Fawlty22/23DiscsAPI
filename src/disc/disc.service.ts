import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Disc } from './entity/disc.entity';

@Injectable()
export class DiscService {
  constructor(
    @InjectRepository(Disc)
    private readonly discRepository: Repository<Disc>,
  ) {}

  async createDisc(discData: any): Promise<Disc> {
    return await this.discRepository.save(discData);
  }

  async getDiscById(discId: number): Promise<Disc> {
    return await this.discRepository.findOneBy({id:discId});
  }

}
