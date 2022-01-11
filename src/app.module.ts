import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiffinListModule } from './tiffin-list/tiffin-list.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [TiffinListModule, TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username: 'postgres',
    password: '9554701559',
    database: 'tiffin-Api',
    autoLoadEntities:true,
    synchronize:true
  }), CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
