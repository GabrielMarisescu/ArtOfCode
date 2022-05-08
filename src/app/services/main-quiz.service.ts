import { Injectable } from '@angular/core';
import { quizMock, QuizInterface, QuizResponseInterface } from '../Quizes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  Quizes$: QuizInterface[] = [];
  AllAnswers: QuizResponseInterface[] = [];

  constructor() {}

  getQuizes(): Observable<QuizInterface[]> {
    const Quizes$ = of(quizMock);
    return Quizes$;
  }

  getRandomQuiz(): Observable<QuizInterface> {
    const randomQuiz = of(
      quizMock[Math.floor(Math.random() * quizMock.length)]
    );
    return randomQuiz;
  }

  sendCurrentAnswer(currentAnswer: QuizResponseInterface): void {
    this.AllAnswers.push(currentAnswer);
    this.checkCompleteness();
  }
  checkCompleteness() {
    // big brain xD
    const correctness = this.AllAnswers.map(
      ({ id, choosenAnswer }) =>
        quizMock.find((quiz) => quiz.id === id)?.answer === choosenAnswer
    );
    console.log(correctness);
    return correctness.every(Boolean);
  }
}
