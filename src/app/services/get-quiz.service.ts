import { Injectable } from '@angular/core';
import { Quiz, QuizInterface } from '../Quizes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetQuizService {
  Quizes: QuizInterface[] = [];

  constructor() {}

  getQuizes(): Observable<QuizInterface[]> {
    const Quizes = of(Quiz);
    return Quizes;
  }
  clearQuizes(): void {
    this.Quizes = [];
  }
}
