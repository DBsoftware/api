import { Answer } from './answer.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Answer)
export class AnswerRepository extends Repository<Answer> {
  private logger = new Logger('AnswerRepository');

  async getTasks(
  ): Promise<Answer[]> {
    const { search } = { search: '' };
    const query = this.createQueryBuilder('task');

    // query.where('task.userId = :userId', { userId: user.id });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` });
    }

    try {
      const client = await query.getMany();
      return client;
    } catch (error) {
      this.logger.error(`Failed to get records. Filters: `, error.stack);
      throw new InternalServerErrorException();
    }
  }

  async createAnswer(createAnswerDto: CreateAnswerDto,): Promise<Answer> {

    const answer = new Answer();
    answer.setAnswer(createAnswerDto)


    try {
      await answer.save();
    } catch (error) {
      this.logger.error(`Failed to create a record for user . Data: ${createAnswerDto}`, error.stack);
      throw new InternalServerErrorException();
    }

    return answer;
  }
}
