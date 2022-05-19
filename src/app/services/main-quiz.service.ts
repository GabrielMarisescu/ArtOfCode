import { Injectable } from '@angular/core';
import { quizMock } from '../Quizes';
import { Observable, of, tap } from 'rxjs';
import { Quiz, QuizResponse, QuizResults } from '../interfaces/quiz-interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  AllAnswers: QuizResponse[] = [];
  finalTableData$: Observable<QuizResults[]> = of();
  quizArray: Quiz[] = quizMock;

  constructor() {}

  getRandomQuiz(): Observable<Quiz> {
    const index = Math.floor(Math.random() * this.quizArray.length);
    const item = this.quizArray[index];
    console.log(this.quizArray);
    return of(item);
  }

  getQuizTableDataFinal(): Observable<QuizResults[]> {
    this.finalTableData$ = of(
      this.AllAnswers.map((obj) => {
        return {
          id: obj.id,
          question: quizMock[obj.id - 1].question,
          choosenAnswer: obj.choosenAnswer,
          correctAnswer: quizMock[obj.id - 1].answer,
          result: quizMock[obj.id - 1].answer === obj.choosenAnswer,
        };
      })
    );
    return this.finalTableData$;
  }
  clearQuizArray(): void {
    this.AllAnswers = [];
  }

  sendCurrentAnswer(currentAnswer: QuizResponse): void {
    this.AllAnswers.push(currentAnswer);
    this.quizArray = this.quizArray.filter((el) => {
      el.id !== currentAnswer.id;
    });

    this.checkCompleteness();
  }

  checkCompleteness() {
    // big brain xD
    const correctness = this.AllAnswers.map(
      ({ id, choosenAnswer }) =>
        quizMock.find((quiz) => quiz.id === id)?.answer === choosenAnswer
    );
    return correctness.every(Boolean);
  }
}
