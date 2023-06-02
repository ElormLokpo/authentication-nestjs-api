import {Controller, Body, Post} from '@nestjs/common';
import { RegisterUserService } from './register.user.service';



@Controller('auth')
export class RegisterUserController{
    constructor(private readonly registeruserservice: RegisterUserService){}


    @Post('register')
    async RegisterUserController(
        @Body('firstname') firstname:string,
        @Body('lastname') lastname: string,
        @Body('othernames') othernames: string,
        @Body('username') username: string,
        @Body('age') age: number,
        @Body('email') email: string,
        @Body('address') address: string,
        @Body('picture') picture: string,
        @Body('password') password:string,
        @Body('pin') pin: number,
        @Body('phone') phone: string,
        @Body('gender') gender: string,
        @Body('title') title: string 
    ){
        const userData = await this.registeruserservice.registerUserService(
            firstname,
            lastname,
            othernames,
            username,
            age,
            email,
            address,
            picture,
            password,
            pin,
            phone,
            gender,
            title );

        return userData;
    }
}