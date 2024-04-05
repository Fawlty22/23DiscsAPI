import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DiscModule } from './disc/disc.module';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { OrmService } from './config/typeorm.config';
import {loadExternalConfigs} from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loadExternalConfigs],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({useClass: OrmService, inject: [ConfigService]}),
    UserModule, 
    DiscModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
