import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { appear } from 'src/app/animations/main/common.animations';
import { QuizResponse } from 'src/app/interfaces/quiz-interfaces';
import { QuizService } from 'src/app/services/main-quiz.service';

@Component({
  selector: 'app-main-quiz',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.scss'],
  animations: [appear],
})
export class QuizComponent implements OnInit {
  constructor(private quiz: QuizService, private readonly router: Router) {}

  questionQueueNumber = new BehaviorSubject(0);
  questionQueueNumber$ = this.questionQueueNumber.asObservable();
  quiz$ = this.questionQueueNumber$.pipe(
    switchMap((num) => {
      return this.quiz.getRandomQuiz();
    })
  );
  currentResponse: QuizResponse | null = null;

  selectAnswer(answer: QuizResponse) {
    this.currentResponse = answer;
  }

  sendAnswer() {
    if (this.currentResponse) {
      this.quiz.sendCurrentAnswer(this.currentResponse);
      this.currentResponse = null;
      //next Quiz
      this.questionQueueNumber.next(this.questionQueueNumber.value + 1);
      //Remove the sent quiz from

      if (this.questionQueueNumber.value === 10) {
        this.router.navigate(['/quiz/results']);
      }
    }
  }

  ngOnInit(): void {}

  //service which will tell us the number of avaiable quizes to show.
}
