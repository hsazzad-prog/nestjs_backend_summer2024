import { Manager } from "src/manager/manager.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("adminentity")
export class AdminProfile {
@PrimaryGeneratedColumn()
id:number;
@Column()
fullname:string;
@Column()
username:string;
@Column()
password:string;
@Column()
filename:string;
@OneToMany(() => Manager, manager => manager.admin)
 managers: Manager[];


}

