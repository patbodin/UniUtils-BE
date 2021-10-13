import { ResponseCodeConst, ResponseMsgConst } from './../common/constant/response.model';
/* eslint-disable prettier/prettier */

import { ResponseConst } from './../common/constant/response.model';
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
        return new TestLogin(ResponseConst.SUCCESS);
    }

    simpleLogin(myUser = "patbodin", myPass = "intajak"): any {
        const result = new LoginResult(ResponseConst.SUCCESS, ResponseCodeConst.CTWS000, ResponseMsgConst.CTWS000);
        const loginUser = new Login();

        loginUser.username = myUser;
        loginUser.password = myPass;
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