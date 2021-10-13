import { DateTimeUtilsService } from './common/datetimeutils/datetimeutils.service';
import { LoginService } from './logins/logins.service';
import { LoginController } from './logins/logins.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, DateTimeUtilsService],
})
export class AppModule {}
