import {Controller, Post, Body} from '@nestjs/common';
import { RegisterUserService } from '../register/register.user.service';

@Controller('auth')
export class LoginUserController{
    constructor(
        private readonly registeruserservice:RegisterUserService
    ){}

    @Post('login/username/pin')
    async usernamePinLoginController(
        @Body('username') username:string,
        @Body('pin') pin:number
    ){
        const userData = await this.registeruserservice.usernamePinAuthService(username, pin);
        return userData;
    }

    @Post('login/username/pin')
    async EmailPasswordLoginController(
        @Body('email') email:string,
        @Body('password') password:string
    ){
        const userData = await this.registeruserservice.emailPasswordAuthService(email, password);
        return userData;
    }
    
}