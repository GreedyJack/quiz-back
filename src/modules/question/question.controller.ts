import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from '@/entities';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getQuestions(): Promise<Question[]> {
    return this.questionService.getQuestions();
  }
}
