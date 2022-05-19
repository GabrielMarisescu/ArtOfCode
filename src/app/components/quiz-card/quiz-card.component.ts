import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quiz, QuizResponse } from 'src/app/interfaces/quiz-interfaces';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent implements OnInit {
  @Input() currentQuiz!: Quiz | null;
  @Input() currentResponse!: QuizResponse | null;

  @Output() chosenAnswer = new EventEmitter<QuizResponse>();

  answer: any;

  sendChoosenAnswer(choosenAnswer: string) {
    this.answer = { id: this.currentQuiz.id, choosenAnswer };
    this.chosenAnswer.emit(this.answer);
  }

  highlightedAnswer(currentlySelectedOption: string) {
    return {
      quizSelectedAnswer:
        currentlySelectedOption === this.currentResponse?.choosenAnswer,
    };
  }
  ngOnInit(): void {}
}
