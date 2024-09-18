import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminProfile } from "./admin.entity";
import { Repository } from "typeorm";
import { Manager } from "src/manager/manager.entity";
import { AdminDTO, AdminLoginDTO } from "./admin.dto";
import { resourceUsage } from "process";
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService{

    constructor(
        @InjectRepository(AdminProfile)  private adminRepo: Repository<AdminProfile>,
        @InjectRepository(Manager)  private managerRepo: Repository<Manager>
    ){}

getAdminById(id: number): Promise<AdminProfile>{
return this.adminRepo.findOneBy({id:id});
}
getAdminByEmail(email:string):Promise<AdminProfile>{
return this.adminRepo.findOneBy({username:email});
}

getAdminByNameAndId(name: string, id: number): object{
return {message: "Admin name: "+name+" id:"+ id};
}
getAdmin(): Promise<AdminProfile[]>
{
return this.adminRepo.find();
}
getAdminWithMangers(): Promise<AdminProfile[]>
{
    return this.adminRepo.find({relations:["managers"]});
}
getAdminByIDWithMangers(adminid:number): Promise<AdminProfile[]>
{
    return this.adminRepo.find({relations:["managers"], where:{id:adminid}});
}

getAllManagers(): Promise<Manager[]>
{
    return this.managerRepo.find({relations:["admin"], select:{admin : {id:true}}});
}




async addAdmin(myobj:AdminDTO): Promise<AdminProfile>{
    const salt= await bcrypt.genSalt();
   const hashedPassword= await bcrypt.hash(myobj.password,salt);
    myobj.password=hashedPassword;
return this.adminRepo.save(myobj);
}
async login(myobj:AdminLoginDTO): Promise<boolean>{
    const admin= await this.adminRepo.findOneBy({username:myobj.username});
   if(admin){
    const isMatch= await bcrypt.compare(myobj.password,admin.password);
       if(isMatch){
           return true;
       }
       else{
           return false;
       }
   }
   else{
       return false;
   }
}

addManager(adminID, manager:Manager): Promise<Manager>{
    manager.admin=adminID;
    console.log(manager.admin);
return this.managerRepo.save(manager);

}
updateAdmin(myobj:object, id: number): object{
return {message: "update adminid: "+id, body:myobj}
}

}