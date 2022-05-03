import { Injectable } from '@angular/core';
import { Quiz, QuizInterface } from '../Quizes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  Quizes$: QuizInterface[] = [];

  constructor() {}

  //wil need to find a way to get  all the objects and get the max amount of questions
  randomId = Math.floor(Math.random() * 10) + 1;

  getQuizes(): Observable<QuizInterface[]> {
    const Quizes$ = of(Quiz);
    return Quizes$;
  }

  getRandomQuiz(): Observable<QuizInterface> {
    //get all the ids and then choose one randomly

    const randomQuiz = of(Quiz[this.randomId]);
    return randomQuiz;
  }
  //getspecific Quiz
}
