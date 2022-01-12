import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDto } from './customer.dto';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {

    constructor(@InjectRepository(CustomerRepository) private customerRepository:CustomerRepository){}
    getAllUser(){
        
    }

  async createNewUser(customerData:CustomerDto){
        const { phoneNumber, address , name   } = customerData;
        const newCust = await this.customerRepository.create({
            phoneNumber,
            address,
            name
        });

        newCust.save();

        return newCust;
    }

    async getUserById(id){
        const userById = await this.customerRepository.findOne(id);
        if (userById)
           return userById;
        else
           throw new NotFoundException();

    }

}
