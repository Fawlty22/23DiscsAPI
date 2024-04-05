import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DiscModule } from './disc/disc.module';
import typeOrmConfig from './config/typeorm.config'
@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'discs23-db-dev.cab78zdnf7fa.us-east-1.rds.amazonaws.com',
        port: 3306,
        username: 'admin',
        password: 'fdRBPfSQAETZ9YyuVRob',
        database: 'discsdb_dev',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }
    ),
    UserModule, 
    DiscModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
