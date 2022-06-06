import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app/app.module';
import { ConfigService } from '@modules/config/config.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const appPort = config.config.application.port ?? 3333;
  await app.listen(appPort);
  Logger.log(`Application is running on port ${appPort}`);
}
bootstrap();
