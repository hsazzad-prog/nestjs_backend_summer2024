import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO, AdminUpdateDTO } from "./admin.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }


 
  @Get('get/:id')
  getAdminById(@Param('id', ParseIntPipe) id: number): object {
    //let myid:string=id;
 console.log(typeof(id));
    return this.adminService.getAdminById(id);
  }
  @Get('getbynameandid')
  getAdminByNameAndId(@Query('name') name: string, @Query('id') id: number): object {
    return this.adminService.getAdminByNameAndId(name, id);
  }
  @Get('getadmin')
  getAdmin(@Body() myobj:object): object {
    console.log(myobj);
return this.adminService.getAdmin(myobj);
  }
  @Post('addadmin')
  @UsePipes(new ValidationPipe())
  addAdmin(@Body() myobj:AdminDTO): object {
    console.log(myobj);
    return this.adminService.addAdmin(myobj);
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
addImage(@Body() myobj:object,@UploadedFile() file: Express.Multer.File) {
console.log(file);
console.log(myobj);
return myobj;
}


@Get('/getimage/:name')
getImage(@Param('name') filename:string, @Res() res) {

 res.sendFile(filename,{ root: './uploads' })
 }


}



