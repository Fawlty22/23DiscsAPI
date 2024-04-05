import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './interface/login.interface';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class LoginService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async login(loginInfo: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userService.getUserByUsername(loginInfo.username);
    const bcrypt = require('bcrypt');
    const isPasswordMatch = await bcrypt.compare(
      loginInfo.password,
      user.password,
    );
    if (!isPasswordMatch) throw new HttpException('Incorrect credentials', 401);
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
