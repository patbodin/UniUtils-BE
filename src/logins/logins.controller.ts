/* eslint-disable prettier/prettier */

import { TestLogin } from './logins.model';
import { Controller, Get, Query, Param, Post, Body, Header } from "@nestjs/common";
import { LoginService } from "./logins.service";

@Controller('api/logins')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Get('/v1/testlogin')
    testController(): string {
        return this.loginService.testLogin();
    }

    @Get('/v2/testlogin')
    testController_2(): TestLogin {
        return this.loginService.testLogin2();
    }

    @Get('/v1/simplelogin')
    simpleLogin(): any {
        return this.loginService.simpleLogin();
    }

    @Get('/v2/simplelogin')
    simpleLogin_2(@Query('username') username: string, @Query('password') password: string): any {
        return this.loginService.simpleLogin(username, password);
    }

    @Get('/v3/simplelogin/:username/:password')
    simpleLogin_3(@Param('username') username: string, @Param('password') password: string): any {
        return this.loginService.simpleLogin(username, password);
    }

    @Post('/v1/validatelogin')
    @Header('Content-Type', 'application/json')
    validateLogin(
        @Body('username') username: string,
        @Body('password') password: string
    ): any {
        // return { username: username, password: password, datetime: Date.now().toString() };
        return this.loginService.validateLogin(username, password);
    }

    @Post('/v1/adduser')
    @Header('Content-Type', 'application/json')
    addUser(
        @Body('username') username: string,
        @Body('password') password: string,
        @Body('isadmin') isadmin: boolean
    ): any {
        return this.loginService.addNewUser(username, password, isadmin);
    }
}