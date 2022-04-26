import { Component, OnInit } from '@angular/core';
import { AsyncSubject, map, Observable, ReplaySubject } from 'rxjs';
import { QuizInterface } from 'src/app/Quizes';
import { GetQuizService } from 'src/app/services/get-quiz.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  finalResults = new Subject<any>();

  constructor(private Quiz: GetQuizService) {}

  ActualQuizes: QuizInterface[] = [];

  //results {id:0,choosen option:"string",correctOption:"string"}

  onCheckAnswer(id: number, answer: string) {
    // working on this
    if (
      this.ActualQuizes[id - 1].id === id &&
      this.ActualQuizes[id - 1].answer === answer
    ) {
      this.finalResults.next(answer);
    }
  }

  ngOnInit(): void {
    this.Quiz.getQuizes().subscribe((quiz) => (this.ActualQuizes = quiz));
    this.finalResults.pipe(map((d) => console.log(d))).subscribe();
  }

  ngOnDestroy(): void {
    this.Quiz.clearQuizes();
    this.finalResults.unsubscribe();
  }

  // if all the answers are locked in, you have a button to go the results page
}
