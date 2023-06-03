import {Injectable} from '@nestjs/common';
import {sign, verify} from 'jsonwebtoken';
import {ConfigService}  from '@nestjs/config';

@Injectable()
export class JwtService{
   constructor(private readonly configService:ConfigService){}


   async generateToken(payload:any){
        const token = await sign(payload, this.configService.get<string>('JWT_SECRET'), {expiresIn: 30} );
        return token;

   }

}