import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AnswerModule } from './answers/answer.module';
import { QuestionModule } from './questions/question.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    QuestionModule,
    ClientModule,
    AnswerModule
  ],
})
export class AppModule {}
