import {Injectable} from '@nestjs/common';
import {sign, verify} from 'jsonwebtoken';

@Injectable()
export class JwtService{


   async generateToken(payload:any){
        const token = await sign(payload);
        return token;

   }

}