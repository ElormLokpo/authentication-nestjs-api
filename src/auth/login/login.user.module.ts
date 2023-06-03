import { Module } from "@nestjs/common";
import { JwtModule } from "../jwt/jwt.module";
import { RegisterUserModule } from "../register/register.user.module";


@Module({
    imports: [
        RegisterUserModule,
        JwtModule
    ]
})
export class LoginUserModule{}