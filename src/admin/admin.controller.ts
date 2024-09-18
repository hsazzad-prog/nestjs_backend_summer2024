import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, Res, Session, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO, AdminLoginDTO, AdminUpdateDTO } from "./admin.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
import { Manager } from "src/manager/manager.entity";
import { AdminProfile } from "./admin.entity";
import { SessionGuard } from "./admin.guard";

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }


 
  @Get('get/:id')
  @UseGuards(SessionGuard)
  getAdminById(@Param('id', ParseIntPipe) id: number, @Session() session): object {
    console.log(session.user);
    return this.adminService.getAdminById(id);
  }
  @Get('getbyemail/:email')
  
  getAdminByEmail(@Param('email') email: string): Promise<AdminProfile> {
    return this.adminService.getAdminByEmail(email);
  }

  @Get('getbynameandid')
  getAdminByNameAndId(@Query('name') name: string, @Query('id') id: number): object {
    return this.adminService.getAdminByNameAndId(name, id);
  }
  @Get('getadmin')
  getAdmin(): Promise<AdminProfile[]> {
    return this.adminService.getAdmin();
  }
@Get('getadminwithmanagers')
getAdminWithManagers(): Promise<AdminProfile[]> {
  return this.adminService.getAdminWithMangers();
}
@Get('getadminbyidwithmanagers/:adminid')
getAdminByIDWithManagers(@Param('adminid') adminid:number): Promise<AdminProfile[]> {
  return this.adminService.getAdminByIDWithMangers(adminid);
}
@Get('getallmanagers')
getAllManagers(): Promise<Manager[]> {

return this.adminService.getAllManagers();
}



  @Post('addadmin')
  @UsePipes(new ValidationPipe())
  addAdmin(@Body() myobj:AdminDTO): object {
    console.log(myobj);
    return this.adminService.addAdmin(myobj);
  }
@Post('login')
async login(@Body() myobj:AdminLoginDTO, @Session() session): Promise<any> {
  const res= await this.adminService.login(myobj);
  if(res==true) {
    session.user=myobj.username;
  }
  return this.adminService.login(myobj);
  
}


  @Post('addmanager/:adminid')
  addManager(@Param('adminid') adminID, @Body() manager:Manager): Promise<Manager> {
return this.adminService.addManager(adminID, manager);
  }


  @Put('updateadmin/:id')
  updateAdmin(@Body() myobj:AdminUpdateDTO, @Param('id') id:number): object {
    return this.adminService.updateAdmin(myobj,id)
  }
@Post('addimage')
@UseInterceptors(FileInterceptor('myfile',
  { fileFilter: (req, file, cb) => {
    if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
    cb(null, true);
    else {
     cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
     }
    },
    limits: { fileSize: 30000 },
    storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
     cb(null,Date.now()+file.originalname)
    },
    })
    }
)
)
addImage(@Body() myobj:AdminDTO,@UploadedFile() file: Express.Multer.File) {

myobj.filename = file.filename;
return this.adminService.addAdmin(myobj);

}


@Get('/getimage/:name')
getImage(@Param('name') filename:string, @Res() res) {

 res.sendFile(filename,{ root: './uploads' })
 }


}



