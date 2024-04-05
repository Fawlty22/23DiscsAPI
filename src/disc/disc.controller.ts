import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DiscService } from './disc.service';

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

  // Add more controller methods for handling HTTP requests as needed
}
