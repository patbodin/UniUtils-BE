/* eslint-disable prettier/prettier */

import { ResponseCodeConst, ResponseMsgConst } from './../common/constant/response.model';
import { ResponseConst } from './../common/constant/response.model';
import { LoginResult } from './logins.model';
import { TestLogin, Login } from './logins.model';
import { Injectable } from "@nestjs/common";
import { DateTimeUtilsService } from './../common/datetimeutils/datetimeutils.service';
import * as fs from 'fs';

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

    validateLogin(username: string, password: string): any {

        let resultMsg: any;
        let result: Login;
        const readData = fs.readFileSync("./src/config/userlist.json", 'utf-8');
        const jsonData = JSON.parse(readData);

        result = jsonData.users.find(item => item.username === username && item.password === password);
        // console.log(result);

        if(result) {
            resultMsg = new LoginResult(ResponseConst.SUCCESS, ResponseCodeConst.CTWS000, ResponseMsgConst.CTWS000);
            // console.log(result);
        }
        else {
            result = new Login();
            resultMsg = new LoginResult(ResponseConst.FAIL, ResponseCodeConst.BTWS000, ResponseMsgConst.BTWS000);
        } 

        const oDatetime = this.datetimeUtils.getDateTimeTimestamp();
        const respDateTime = { 
                datetime: oDatetime.datetime,
                timestamp: oDatetime.timestamp
            };

        return { ...resultMsg, ...result, ...respDateTime };
    }
}