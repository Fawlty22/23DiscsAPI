import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AllowUnauthorizedAccess } from './common/decorators/allow-unauthorized.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AllowUnauthorizedAccess()
  @HttpCode(HttpStatus.OK)
  @Get('health')
  getHealth(): HttpStatus {
    return this.appService.getHealth();
  }
}
