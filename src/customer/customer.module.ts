import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
