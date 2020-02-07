import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from './answer.entity';

@Controller('answers')
export class AnswerController {
  private logger = new Logger('AnswerController');

  constructor(private answerService: AnswerService) {}

  @Get()
  get(): Promise<Answer[]> {
    this.logger.verbose(`retrieving all records. Filters: `);
    return this.answerService.getAnswers();
  }


  @Post()
  @UsePipes(ValidationPipe)
  createAnswer(@Body() createAnswerDto: CreateAnswerDto,
  ): Promise<Answer> {
    this.logger.verbose(` creating a new record. Data: ${JSON.stringify(createAnswerDto)}`);
    return this.answerService.createAnswer(createAnswerDto);
  }


}
