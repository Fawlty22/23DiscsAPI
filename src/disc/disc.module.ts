// disc.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscService } from './disc.service';
import { DiscController } from './disc.controller';
import { Disc } from './entity/disc.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Disc])], 
  controllers: [DiscController],
  providers: [DiscService], 
})
export class DiscModule {}
