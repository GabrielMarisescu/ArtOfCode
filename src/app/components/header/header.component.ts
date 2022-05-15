import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/main-quiz.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly quiz: QuizService) {}

  clearCurrentQuizinstance() {
    this.quiz.clearQuizArray();
  }
  ngOnInit(): void {}
}
