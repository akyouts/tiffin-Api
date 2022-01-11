import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";


@Entity('Customer')
export class tiffin_list extends BaseEntity {
    
    @PrimaryColumn()
    PhoneNumber:Number
    
    @Column()
    Name:string

    @Column()
    Address:string

    
    

}