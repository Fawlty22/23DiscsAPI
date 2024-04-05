import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm'
import { Disc } from './entity/disc.entity';
import { DiscDto } from './dto/disc.dto';

@Injectable()
export class DiscService {
  constructor(
    @InjectRepository(Disc)
    private readonly discRepository: Repository<Disc>,
  ) {}

  async createDisc(discData: DiscDto): Promise<Disc> {
    const disc = this.discRepository.create(discData);
    return await this.discRepository.save(discData);
  }

  async getDiscById(discId: number): Promise<Disc> {
    return await this.discRepository.findOneBy({id:discId});
  }

  async updateDisc(discData: Disc): Promise<Disc> {
    return await this.discRepository.save(discData);
  }

  async deleteDisc(discId: number): Promise<DeleteResult> {
  return await this.discRepository.delete(discId);
  }

}
