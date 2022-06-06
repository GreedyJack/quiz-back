import { QuestionCategory } from 'src/types/enums/question-category.enum';
import { IQuizElement } from './quiz-element.interface';
import { IStatCounter } from './stat-counter.interface';

export interface IQuestion {
  id: string;
  category: QuestionCategory;
  quiz: IQuizElement;
  stats: IStatCounter;
}
