import { IsNotEmpty } from "class-validator"

export class CustomerDto{

    @IsNotEmpty()
    phoneNumber:Number
    
    @IsNotEmpty()
    name:string
    
    @IsNotEmpty()
    Address:string
    
    @IsNotEmpty()
    tiffinProviderid:string
}