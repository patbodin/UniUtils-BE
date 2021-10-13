/* eslint-disable prettier/prettier */
import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/v1/testtext')
  getTestText(): any {
    return { msg: 'Hello World!!' };
  }

  @Get('/api/v2/testtext')
  getTestText_2(): {} {
    return { msg: 'Hello World!! Version 2' };
  }

  @Get('/api/v3/testtext')
  getTestText_3(): { msg: string } {
    return { msg: 'Hello World!! Version 3' };
  }

  @Get('/api/v4/testtext')
  @Header('Content-Type', 'text/html')
  getTestText_4(): {} {
    return { msg: 'Hello World!! Version 4' };
  }
}
