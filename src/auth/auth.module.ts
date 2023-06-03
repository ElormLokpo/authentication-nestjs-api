import { Module } from "@nestjs/common";
import { LoginUserModule } from "./login/login.user.module";
import { GoogleModule } from "./ouath/google.module";
import { RegisterUserModule } from "./register/register.user.module";


@Module({
    imports: [
        RegisterUserModule, 
        LoginUserModule,
      
    ]
})
export class AuthModule{}