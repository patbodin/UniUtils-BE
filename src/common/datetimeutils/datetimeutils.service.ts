/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import * as datetime from 'date-and-time';

@Injectable()
export class DateTimeUtilsService {
    getDateTime(): any {
        const currDateTime = Date.now();
        const oDateTime = new Date(currDateTime);

        return datetime.format(oDateTime, "YYYY/MM/DD HH:mm:ss.SSS");
    }

    getDateTimeTimestamp(): any {
        const currDateTime = Date.now();
        const oDateTime = new Date(currDateTime);

        return {
            datetime: datetime.format(oDateTime, "YYYY/MM/DD HH:mm:ss.SSS"),
            timestamp: currDateTime
        };
    }
}