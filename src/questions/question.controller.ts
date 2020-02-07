import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
  private logger = new Logger('QuestionsController');

  constructor(private questionsService: QuestionService) {}

  @Get()
  getQuestions(): Promise<Question[]> {
    this.logger.verbose(`retrieving all records.`);
    return this.questionsService.getQuestions();
  }



  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    this.logger.verbose(` creating a new record. Data: ${JSON.stringify(createQuestionDto)}`);
    return this.questionsService.createQuestion(createQuestionDto);
  }



  @Patch('/:id')
  updateClientStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('activa') status: any,
  ): Promise<Question> {
    return this.questionsService.updateQuestionStatus(id);
  }
}
