import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizInterface } from 'src/app/Quizes';
import { GetQuizService } from 'src/app/services/get-quiz.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(private Quiz: GetQuizService) {}

  ActualQuizes: QuizInterface[] = [];

  ngOnInit(): void {
    this.Quiz.getQuizes().subscribe((quiz) => (this.ActualQuizes = quiz));
    console.log(this.ActualQuizes);
  }

  ngOnDestroy(): void {
    this.Quiz.clearQuizes();
  }
}
