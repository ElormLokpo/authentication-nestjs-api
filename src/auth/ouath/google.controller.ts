import {Controller, Get, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';


@Controller('auth')
export class GoogleController{

    @UseGuards(AuthGuard('google'))
    @Get('google')
    async googleLogin(){

    }

    @UseGuards(AuthGuard('google'))
    @Get('google/callback')
    async googleCallback(){
        
    }



}