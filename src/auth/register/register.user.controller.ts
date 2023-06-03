import {Controller, Body, Post} from '@nestjs/common';
import { RegisterUserService } from './register.user.service';
import {ConfigService} from '@nestjs/config';
import { setMongoURL } from 'src/database/database.service';



@Controller('auth')
export class RegisterUserController{
    constructor(
        private readonly registeruserservice: RegisterUserService,
        private readonly configService: ConfigService
        ){}


    @Post('register')
    async RegisterUserController(
        @Body('mongourl') mongourl:string,
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

        
        setMongoURL(mongourl);
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