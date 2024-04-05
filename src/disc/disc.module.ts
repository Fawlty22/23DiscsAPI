// disc.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscService } from './disc.service';
import { DiscController } from './disc.controller';
import { DiscRepository } from './repository/disc.repository';
import { Disc } from './entity/disc.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Disc, DiscRepository])], 
  controllers: [DiscController],
  providers: [DiscService, DiscRepository], 
})
export class DiscModule {}
