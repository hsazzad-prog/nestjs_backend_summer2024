import { IsEmail, IsEmpty, IsNotEmpty, IsString, Matches } from "class-validator";

export class AdminDTO{
    @IsString({message: "Please enter a valid name"})
    @Matches(/^[A-Za-z]+$/,{message: "Please enter a valid name"})
    name:string;

    @IsNotEmpty()
    id:number;


    @IsEmail()
    username:string;
}

export class AdminUpdateDTO{
    @IsEmail()
    "username" :string;
    "address":string;
}