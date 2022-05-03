import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { QuizInterface, QuizResponseInterface } from 'src/app/Quizes';
import { QuizService } from 'src/app/services/main-quiz.service';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-main-quiz.',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.4s'),
      ]),
      transition(':leave', [
        animate('0.4s', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class QuizComponent implements OnInit {
  constructor(private Quiz: QuizService) {}

  randomQuiz!: QuizInterface;
  currentResponse!: QuizResponseInterface;
  showMatCard: Boolean = true;

  toggleAnimation(): void {
    //do the flyInOut animation
    setTimeout(() => {
      this.showMatCard = true;
    }, 1000);
  }

  selectAnswer(answer: QuizResponseInterface) {
    this.currentResponse = answer;
  }

  sendAnswer() {
    if (this.currentResponse) {
      this.Quiz.sendCurrentAnswer(this.currentResponse);
    }
  }

  ngOnInit(): void {
    this.Quiz.getRandomQuiz().subscribe((quize) => (this.randomQuiz = quize));
  }

  //service which will tell us the number of avaiable quizes to show.
}
