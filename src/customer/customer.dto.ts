import { IsNotEmpty } from "class-validator"

export class CustomerDto{

    @IsNotEmpty()
    phoneNumber:string
    
    @IsNotEmpty()
    name:string
    
    @IsNotEmpty()
    address:string
    
    tiffinProviderid:string
}