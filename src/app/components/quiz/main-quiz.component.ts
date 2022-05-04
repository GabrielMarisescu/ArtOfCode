import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appear } from 'src/app/animations/main/main.component';
import { QuizInterface, QuizResponseInterface } from 'src/app/Quizes';
import { QuizService } from 'src/app/services/main-quiz.service';

@Component({
  selector: 'app-main-quiz.',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.scss'],
  animations: [appear],
})
export class QuizComponent implements OnInit {
  constructor(private Quiz: QuizService) {}

  randomQuiz: QuizInterface | null = null;
  currentResponse: QuizResponseInterface | null = null;

  selectAnswer(answer: QuizResponseInterface) {
    this.currentResponse = answer;
  }

  sendAnswer() {
    if (this.currentResponse) {
      this.Quiz.sendCurrentAnswer(this.currentResponse);
      this.currentResponse = null;
      this.randomQuiz = null;

      this.Quiz.getRandomQuiz().subscribe((quiz) => (this.randomQuiz = quiz));
    }
  }

  ngOnInit(): void {
    this.Quiz.getRandomQuiz().subscribe((quiz) => (this.randomQuiz = quiz));
  }

  //service which will tell us the number of avaiable quizes to show.
}
