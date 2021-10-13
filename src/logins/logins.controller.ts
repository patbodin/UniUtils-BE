/* eslint-disable prettier/prettier */
import { TestLogin } from './logins.model';
import { Controller, Get, Query, Param } from "@nestjs/common";
import { LoginService } from "./logins.service";

@Controller('api/controllers')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

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

    @Get('/v2/simplecontroller')
    simpleLogin_2(@Query('username') username: string, @Query('password') password: string): any {
        return this.loginService.simpleLogin(username, password);
    }

    @Get('/v3/simplecontroller/:username/:password')
    simpleLogin_3(@Param('username') username: string, @Param('password') password: string): any {
        return this.loginService.simpleLogin(username, password);
    }
}