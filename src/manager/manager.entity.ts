import { AdminProfile } from "src/admin/admin.entity";
import { Admin, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("manager")
export class Manager {

@PrimaryGeneratedColumn()
id:number;

@Column()
name:string;

@Column()
email:string;

@ManyToOne(() => AdminProfile, admin => admin.managers)
 
admin: AdminProfile;

}