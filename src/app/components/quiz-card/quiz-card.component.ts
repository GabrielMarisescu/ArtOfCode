import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizInterface, QuizResponseInterface } from 'src/app/Quizes';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent implements OnInit {
  @Input() currentQuiz!: QuizInterface | null;
  @Output() chosenAnswer = new EventEmitter<QuizResponseInterface>();
  @Input() currentResponse!: QuizResponseInterface | null;

  constructor() {}

  sendChoosenAnswer(id: number, choosenAnswer: string) {
    this.chosenAnswer.emit({ id, choosenAnswer });
  }

  ngOnInit(): void {}
}
