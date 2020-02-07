import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { AnswerRepository } from './answer.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(AnswerRepository)
    private answerRepository: AnswerRepository,
  ) {}

  async getAnswers(): Promise<Answer[]> {
    return this.answerRepository.getTasks();
  }



  async createAnswer(createClientDto: CreateAnswerDto ): Promise<Answer> {
    return this.answerRepository.createAnswer(createClientDto);
  }


}
