import { Injectable } from '@angular/core';
import { quizMock } from '../Quizes';
import { Observable, of } from 'rxjs';
import { Quiz, QuizResponse, QuizResults } from '../interfaces/quiz-interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  AllAnswers: QuizResponse[] = [];
  finalTableData: Observable<QuizResults[]> = of();
  constructor() {}

  getRandomQuiz(): Observable<Quiz> {
    const randomQuiz$ = of(
      quizMock[Math.floor(Math.random() * quizMock.length)]
    );
    return randomQuiz$;
  }

  removeQuizFromArray(idOfQuiz: number): void {
    //
  }

  getQuizTableDataFinal(): Observable<QuizResults[]> {
    this.finalTableData = of(
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
    return this.finalTableData;
  }
  clearQuizArray(): void {
    this.AllAnswers = [];
  }

  // GET rid of the quizes that were already shown , never return them again

  sendCurrentAnswer(currentAnswer: QuizResponse): void {
    this.AllAnswers.push(currentAnswer);
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
