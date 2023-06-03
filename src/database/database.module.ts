import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {Module} from '@nestjs/common';
import { getMongoURL } from './database.service';


@Module({
    imports:[
        ConfigModule.forRoot({isGlobal:true}),
        MongooseModule.forRootAsync({
           useFactory: ()=>({
              uri: getMongoURL() || process.env.MONGO_URL
           })
        })
    ]
})
export class DatabaseModule{}