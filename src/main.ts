import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as chalk from 'chalk';

const serverPort = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverPort);

  console.log(chalk.blue(`This server has started at port ${chalk.green.bold(serverPort)}`));
}
bootstrap();
