import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('tiffin_list')
export class tiffin_list{
    @PrimaryColumn('uuid')
    id:string

    @Column()
    User:string

    @Column()
    Date:Date
    
    @Column()
    Food:string

    @Column()
    Amt:Number
    

}