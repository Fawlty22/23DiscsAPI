import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DiscModule } from './disc/disc.module';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { OrmService } from './config/typeorm.config';
import {loadExternalConfigs} from './config/configuration';
import { LoginModule } from './login/login.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './login/auth.guard';
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loadExternalConfigs],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({useClass: OrmService, inject: [ConfigService]}),
    JwtModule.register({
      global: true,
      secret: 'pickleweasel',
      signOptions: { expiresIn: '60s'}
    }),
    UserModule, 
    DiscModule, 
    LoginModule
],
  controllers: [AppController],
  providers: [
    AppService, 
    {
    provide: APP_GUARD,
    useClass: AuthGuard
    },
  ],
})
export class AppModule {}
