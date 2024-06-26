import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminProfile } from "./admin.entity";
import { Repository } from "typeorm";
import { Manager } from "src/manager/manager.entity";
import { AdminDTO } from "./admin.dto";

@Injectable()
export class AdminService{

    constructor(
        @InjectRepository(AdminProfile)  private adminRepo: Repository<AdminProfile>,
        @InjectRepository(Manager)  private managerRepo: Repository<Manager>
    ){}

getAdminById(id: number): object{
return {message: "Admin id:  "+id };
}
getAdminByNameAndId(name: string, id: number): object{
return {message: "Admin name: "+name+" id:"+ id};
}
getAdmin(myobj:object): object{
return myobj;
}
addAdmin(myobj:AdminDTO): Promise<AdminProfile>{
return this.adminRepo.save(myobj);
}

updateAdmin(myobj:object, id: number): object{
return {message: "update adminid: "+id, body:myobj}
}

}