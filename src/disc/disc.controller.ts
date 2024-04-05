import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { DiscService } from './disc.service';
import { Disc } from './entity/disc.entity';
import { DeleteResult } from 'typeorm';

@Controller('discs')
export class DiscController {
  constructor(private readonly discService: DiscService) {}

  @Post()
  async createDisc(@Body() discData: any): Promise<any> {
    return await this.discService.createDisc(discData);
  }

  @Get(':id')
  async getDiscById(@Param('id') discId: number): Promise<any> {
    return await this.discService.getDiscById(discId);
  }

  @Put(':id')
  async updateDisc(@Param('id') discId: number, @Body() disc: Disc): Promise<Disc> {
    return await this.discService.updateDisc(disc);
  }

  @Delete(':id')
  async deleteDisc(@Param('id') discId: number): Promise<DeleteResult> {
    return await this.discService.deleteDisc(discId);
  }

  // Add more controller methods for handling HTTP requests as needed
}
