import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-google-oauth20';
import {Injectable} from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: '',
            clientSecret:'',
            callbackURL: '',
            scopes: ['profile','email']
        });
    }

    validate(profile:any, accessToken:any, refreshToken:any){

        const email = profile.emails[0];
        const fullname = profile.displayName;

        return {email, fullname, accessToken};
    }
}


