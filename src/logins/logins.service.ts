/* eslint-disable prettier/prettier */

import { LoginResult } from './logins.model';
import { TestLogin, Login } from './logins.model';
import { Injectable } from "@nestjs/common";
import { DateTimeUtilsService } from './../common/datetimeutils/datetimeutils.service';

@Injectable()
export class LoginService {
    constructor(private readonly datetimeUtils: DateTimeUtilsService) {}

    testLogin(): string {
        return "This is a test controller na krub";
    }

    testLogin2(): TestLogin {
        return new TestLogin("Success");
    }

    simpleLogin(): any {
        const result = new LoginResult("Success", "CTWS000", "Process successful");
        const loginUser = new Login();

        loginUser.username = "patbodin";
        loginUser.password = "intajak";
        loginUser.isAdmin = true;

        // const respDateTime = { datetime: this.datetimeUtils.getDateTime()};

        const oDatetime = this.datetimeUtils.getDateTimeTimestamp();
        const respDateTime = { 
            datetime: oDatetime.datetime,
            timestamp: oDatetime.timestamp
        };

        return {...result, ...loginUser, ...respDateTime};
    }
}