import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminProfile } from "./admin.entity";
import { Manager } from "src/manager/manager.entity";
@Module({
    imports: [TypeOrmModule.forFeature([AdminProfile, Manager])],
    controllers: [AdminController],
    providers: [AdminService],
}) 

export class AdminModule {}