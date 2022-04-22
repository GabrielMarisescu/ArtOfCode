import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizInterface } from 'src/app/Quizes';
import { GetQuizService } from 'src/app/services/get-quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(private Quiz: GetQuizService) {}

  ActualQuizes: QuizInterface[] = [];

  CurrentResultAnswers: any = [];
  //results {id:0,choosen option:"string",correctOption:"string"}

  onCheckAnswer(id: number, answer: string) {
    // working on this
    if (
      this.ActualQuizes[id - 1].id === id &&
      this.ActualQuizes[id - 1].answer === answer
    ) {
      this.CurrentResultAnswers.push(id, true);
    }

    console.log(id, answer, this.CurrentResultAnswers);
  }

  ngOnInit(): void {
    this.Quiz.getQuizes().subscribe((quiz) => (this.ActualQuizes = quiz));
  }

  ngOnDestroy(): void {
    this.Quiz.clearQuizes();
    this.CurrentResultAnswers = [];
  }

  // if all the answers are locked in, you have a button to go the results page
}
