import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Customer')
export class Customer extends BaseEntity{

    @PrimaryColumn('uuid')
    id:string
    
    @Column({
        unique:true,
    })
    phoneNumber:Number

    @Column()
    name:string

    @Column()
    Address:string

    @Column()
    providerId:string


}