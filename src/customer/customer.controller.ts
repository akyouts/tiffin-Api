import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerDto } from './customer.dto';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService:CustomerService){}

    @Get()
    getAllCustomer(){

    }

    @Post()
    createNewCustomer(@Body() customerData: CustomerDto){
        return this.customerService.createNewUser(customerData);
    }

    @Get('/:id')
    getUserById(@Param('id') id:string){
        return this.customerService.getUserById(id);
    }

}
