import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm'
import { Disc } from './entity/disc.entity';
import { DiscDto } from './dto/disc.dto';
import { DiscSearchResult } from './dto/disc-search-result.interface';

@Injectable()
export class DiscService {
  discUrl: string = 'https://discit-api.fly.dev/disc?name=';
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

  async searchForDiscByName(name: string): Promise<DiscSearchResult> {
    try {
      const discData = await fetch(this.discUrl + name);
      const response: DiscSearchResult = await discData.json();
      return response;
    } catch(e) {
      throw new HttpException('Error searching for disc' + name, e);
    }
  }

  async updateDisc(discData: Disc): Promise<Disc> {
    return await this.discRepository.save(discData);
  }

  async deleteDisc(discId: number): Promise<DeleteResult> {
  return await this.discRepository.delete(discId);
  }

}
