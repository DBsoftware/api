import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionRepository } from './question.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async getQuestions(): Promise<Question[]> {
    return this.questionRepository.getQuestions();
  }


  async createQuestion(createQuestionDto: CreateQuestionDto ): Promise<Question> {
    return this.questionRepository.createQuestion(createQuestionDto);
  }


  async updateQuestionStatus(
    id: number
  ): Promise<Question> {
    const task = await this.getQuestionById(id);
    task.activa = false;
    await task.save();
    return task;
  }

  async getQuestionById(
    id: number
  ): Promise<Question> {
    const found = await this.questionRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }

    return found;
  }
}
