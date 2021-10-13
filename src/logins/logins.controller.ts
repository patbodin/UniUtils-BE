import { TestLogin } from './logins.model';
/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { LoginService } from "./logins.service";

@Controller('api/controllers')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get('/v1/testcontroller')
    testController(): string {
        return this.loginService.testLogin();
    }

    @Get('/v2/testcontroller')
    testController_2(): TestLogin {
        return this.loginService.testLogin2();
    }

    @Get('/v1/simplecontroller')
    simpleLogin(): any {
        return this.loginService.simpleLogin();
    }
}