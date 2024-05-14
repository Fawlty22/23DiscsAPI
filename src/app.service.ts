import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHealth(): HttpStatus {
    return HttpStatus.OK;
  }
}
