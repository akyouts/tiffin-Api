import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {

    sayHello(){
        return "Hello Nest Js is Finally Running"
    }
}
