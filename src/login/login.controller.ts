import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';
import { LoginDto } from './interface/login.interface';
import { AllowUnauthorizedAccess } from 'src/common/decorators/allow-unauthorized.decorator';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @AllowUnauthorizedAccess()
  @HttpCode(HttpStatus.OK)
  @Post()
  login(@Body() signInDto: LoginDto) {
    return this.loginService.login(signInDto);
  }

  @Post('logout')
  logout(){

  }
}
