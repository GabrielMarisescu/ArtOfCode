import { Injectable } from '@angular/core';
import { quizMock } from '../Quizes';
import { Observable, of } from 'rxjs';
import { Quiz, QuizResponse, QuizResults } from '../interfaces/quiz-interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  Quizes$: Quiz[] = [];
  AllAnswers: QuizResponse[] = [];
  finalTableData: QuizResults[] | {} = {};

  constructor() {}

  getQuizes(): Observable<Quiz[]> {
    const Quizes$ = of(quizMock);
    return Quizes$;
  }

  getRandomQuiz(): Observable<Quiz> {
    const randomQuiz$ = of(
      quizMock[Math.floor(Math.random() * quizMock.length)]
    );
    return randomQuiz$;
  }

  //Todo final quiz
  //getQuizTableDataFinal(): Observable<QuizResults[]> {

  // return of()
  //}

  sendCurrentAnswer(currentAnswer: QuizResponse): void {
    this.AllAnswers.push(currentAnswer);
    this.checkCompleteness();
    console.log(this.AllAnswers);
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
