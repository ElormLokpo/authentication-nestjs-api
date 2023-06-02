import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegisterUserController } from "./register.user.controller";
import { RegisterUserSchema } from "./register.user.DTO";
import { RegisterUserService } from "./register.user.service";


@Module({
    imports:[
        MongooseModule.forFeature([{name: 'RegisterUserModel', schema:RegisterUserSchema}])
    ],
    controllers:[RegisterUserController],
    providers:[RegisterUserService],
    exports: [RegisterUserService]
})
export class RegisterUserModule{}