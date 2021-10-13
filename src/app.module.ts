import { LoginModule } from './logins/logins.module';
import { DateTimeUtilsService } from './common/datetimeutils/datetimeutils.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LoginModule],
  controllers: [AppController],
  providers: [AppService, DateTimeUtilsService],
})
export class AppModule {}
