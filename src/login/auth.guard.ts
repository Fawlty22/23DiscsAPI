import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { ALLOW_UNAUTHORIZED_ACCESS } from 'src/common/decorators/allow-unauthorized.decorator';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const AllowUnauthorizedAccess = this.reflector.getAllAndOverride<boolean>(ALLOW_UNAUTHORIZED_ACCESS, [
            context.getHandler(),
            context.getClass(),
          ]);
          if (AllowUnauthorizedAccess) {
            // 💡 See this condition
            return true;
          }
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException();
      }
    
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: 'pickleweasel'
          }
        );

        console.log(payload);
        
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }