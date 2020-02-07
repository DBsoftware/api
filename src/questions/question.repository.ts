import { Question } from './question.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
  private logger = new Logger('ClientRepository');

  async getQuestions(): Promise<Question[]> {
    const query = this.createQueryBuilder('question');
    query.andWhere('question.activa = :status', { status: 1 });
    try {
      const questions = await query.getMany();
      return questions;
    } catch (error) {
      this.logger.error(`Failed to get records.`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {

    const question = new Question();
    question.setQuestion(createQuestionDto)


    try {
      await question.save();
    } catch (error) {
      this.logger.error(`Failed to create a record for user . Data: ${createQuestionDto}`, error.stack);
      throw new InternalServerErrorException();
    }

    return question;
  }
}
