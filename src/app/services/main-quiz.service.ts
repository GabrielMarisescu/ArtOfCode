import { Injectable } from '@angular/core';
import { Quiz, QuizInterface, QuizResponseInterface } from '../Quizes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  Quizes$: QuizInterface[] = [];
  randomId: number = Math.floor(Math.random() * Quiz.length);
  AllAnswers: QuizResponseInterface[] = [];
  testVariable!: boolean;

  constructor() {}

  getRandomQuiz(): Observable<QuizInterface> {
    const randomQuiz$ = of(Quiz[this.randomId]);
    return randomQuiz$;
  }

  getQuizes(): Observable<QuizInterface[]> {
    const Quizes$ = of(Quiz);
    return Quizes$;
  }

  sendCurrentAnswer(currentAnswer: QuizResponseInterface): void {
    //little check, needs to be true always.
    this.testVariable = this.AllAnswers.every(
      (response) => response.id !== currentAnswer.id
    );

    this.AllAnswers.push(currentAnswer);
    //we want to not have more than 1 entry with the same ID
    console.log(this.AllAnswers);
    //   console.log(this.testVariable);
  }
  //getspecific Quiz
}