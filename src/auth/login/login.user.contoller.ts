import {Controller, Post, Body} from '@nestjs/common';
import { RegisterUserService } from '../register/register.user.service';
import { JwtService } from '../jwt/jwt.service';

@Controller('auth')
export class LoginUserController{
    constructor(
        private readonly registeruserservice:RegisterUserService,
        private readonly jwtservice:JwtService
    ){}

    @Post('login/username/pin')
    async usernamePinLoginController(
        @Body('username') username:string,
        @Body('pin') pin:number
    ){
        const userData = await this.registeruserservice.usernamePinAuthService(username, pin);
        const token_data = {_id: userData._id};
        const token = await this.jwtservice.generateToken(token_data);
        return {userData, token};
    }

    @Post('login/username/pin')
    async EmailPasswordLoginController(
        @Body('email') email:string,
        @Body('password') password:string
    ){
        const userData = await this.registeruserservice.emailPasswordAuthService(email, password);
        const token_data = {_id: userData._id};
        const token = await this.jwtservice.generateToken(token_data);
        return {userData, token};
    }
    
}