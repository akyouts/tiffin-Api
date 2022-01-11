import { BaseEntity, Column, PrimaryColumn } from "typeorm";

export class Customer extends BaseEntity{

    @PrimaryColumn('uuid')
    id:string
    
    @Column({
        unique:true,
        length:10
    })
    phoneNumber:Number

    @Column()
    name:string

    @Column()
    Address:string

    @Column()
    providerId:string


}