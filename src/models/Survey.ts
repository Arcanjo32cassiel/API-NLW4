import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid';


@Entity("surveys")
class Survey{
    @PrimaryColumn()
    readonly id: string;
 
     @Column()
     title: string;
 
     @Column()
     descripition:string;
     
     @CreateDateColumn()
     created_at: Date;
     
     constructor(){
         if(!this.id){
             this.id = uuid()
         }
}
}
export {Survey}