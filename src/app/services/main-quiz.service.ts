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
  // finalTableData: QuizResults[] = [];
  finalTableData: any = of();

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
  // take 1 quizResponse, modify the object and then put the object in
  //a different array,
  //everytime the user clicks, i push a value to the array, and I can

  getQuizTableDataFinal(): any {
    //id,choosen Answer //loop thru the object
    this.finalTableData = of(
      this.AllAnswers.map((obj) => {
        return {
          id: obj.id,
          question: quizMock[obj.id - 1].question,
          choosenAnswer: obj.choosenAnswer,
          correctAnswer: quizMock[obj.id - 1].answer,
        };
      })
    );
    console.log(this.finalTableData);
    return this.finalTableData;
  }

  // GET rid of the quizes that were already shown , never return them again

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
