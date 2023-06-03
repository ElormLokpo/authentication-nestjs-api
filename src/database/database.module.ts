import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {Module} from '@nestjs/common';
import { getMongoURL } from './database.service';


@Module({
    imports:[
     
        MongooseModule.forRootAsync({
            useFactory: () =>({
                uri: process.env.MONGO_URL
            })
        })
    ]
})
export class DatabaseModule{}