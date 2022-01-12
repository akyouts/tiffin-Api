import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Customer')
export class Customer extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string
    
    @Column({
        unique:true,
    })
    phoneNumber:string

    @Column()
    name:string

    @Column()
    address:string

    @Column({
        // This is will get removed when provider side features is complete
        nullable: true
    })
    providerId:string


}