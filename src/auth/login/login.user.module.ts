import { Module } from "@nestjs/common";
import { JwtModule } from "../jwt/jwt.module";
import { RegisterUserModule } from "../register/register.user.module";
import { LoginUserController } from "./login.user.contoller";


@Module({
    imports: [
        RegisterUserModule,
        JwtModule
    ],
    controllers:[LoginUserController]
})
export class LoginUserModule{}