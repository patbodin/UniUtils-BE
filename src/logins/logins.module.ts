import { DateTimeUtilsService } from './../common/datetimeutils/datetimeutils.service';
/* eslint-disable prettier/prettier */

import { LoginService } from './logins.service';
import { LoginController } from './logins.controller';
import { Module } from "@nestjs/common";


@Module({
    imports: [],
    controllers: [LoginController],
    providers: [LoginService, DateTimeUtilsService],
})

export class LoginModule { }