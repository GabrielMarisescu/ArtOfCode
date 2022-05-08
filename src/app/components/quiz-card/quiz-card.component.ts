import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizInterface, QuizResponseInterface } from 'src/app/Quizes';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent implements OnInit {
  @Input() currentQuiz!: QuizInterface | null;
  @Input() currentResponse!: QuizResponseInterface | null;

  @Output() chosenAnswer = new EventEmitter<QuizResponseInterface>();
  answer: any;

  sendChoosenAnswer(choosenAnswer: string) {
    this.answer = { id: this.currentQuiz?.id, choosenAnswer };
    this.chosenAnswer.emit(this.answer);
  }

  ngOnInit(): void {}
}
