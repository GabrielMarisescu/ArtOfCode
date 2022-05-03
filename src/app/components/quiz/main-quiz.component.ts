import { Component, OnInit } from '@angular/core';
import { QuizInterface, QuizResponseInterface } from 'src/app/Quizes';
import { QuizService } from 'src/app/services/main-quiz.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-main-quiz.',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(private Quiz: QuizService) {}

  randomQuiz!: QuizInterface;

  currentResponses: any = [];

  addChoosenAnswer(answer: any) {
    this.currentResponses.push(answer);
    console.log(answer, this.currentResponses);
  }

  ngOnInit(): void {
    this.Quiz.getRandomQuiz().subscribe((quize) => (this.randomQuiz = quize));
  }
  //service which will tell us the number of avaiable quizes to show.

  // buttonClick   on submit
}
