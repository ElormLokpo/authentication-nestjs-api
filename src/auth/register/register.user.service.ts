import { Injectable } from "@nestjs/common/decorators";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { RegisterUserDTO } from "./register.user.DTO";
const bcrypt = require('bcrypt');


@Injectable()
export class RegisterUserService{
    constructor(
        @InjectModel('RegisterUserModel') private readonly registerusermodel:Model<RegisterUserDTO>
    ){}


    async registerUserService(
        firstname:string,
        lastname: string,
        othernames: string,
        username: string,
        age: number,
        email: string,
        address: string,
        picture: string,
        password:string,
        pin: number,
        phone: string,
        gender: string,
        title: string ){

            const emailExists = await this.registerusermodel.findOne({email});

            if(emailExists){
                return null;
            }
        
            const userData = await this.registerusermodel.create({
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
                title });

            return userData;
    }

    async usernamePinAuthService(username:string, pin:number){
        const findUsername = await this.registerusermodel.findOne({username});

        if(findUsername){
            const is_pin_valid = await bcrypt.compare(pin, findUsername.pin);
            
            if(is_pin_valid){
                return findUsername;
            }else{
                return null;
            }
        }
    }

    async emailPasswordAuthService(email:string, password:string){
        const findUserEmail = await this.registerusermodel.findOne({email});

        if(findUserEmail){
            const is_password_valid = await bcrypt.compare(password, findUserEmail.password);
            
            if(is_password_valid){
                return findUserEmail;
            }else{
                return null;
            }
        }
    }
}