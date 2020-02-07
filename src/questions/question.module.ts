import { Module } from '@nestjs/common';
import { QuestionsController } from './question.controller';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionRepository]),
  ],
  controllers: [QuestionsController],
  providers: [QuestionService],
})
export class QuestionModule {}
