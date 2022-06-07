import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  ConfigModule,
  DatabaseModule,
  GameModule,
  QuestionModule,
  UserModule,
} from '@/modules';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    GameModule,
    QuestionModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
