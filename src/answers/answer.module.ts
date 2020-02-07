import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerRepository } from './answer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnswerRepository]),
  ],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
