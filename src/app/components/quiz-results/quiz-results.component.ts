import { Component, OnInit } from '@angular/core';
import { QuizResults } from 'src/app/interfaces/quiz-interfaces';
import { QuizService } from 'src/app/services/main-quiz.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss'],
})
export class QuizResultsComponent implements OnInit {
  constructor(private readonly quiz: QuizService) {}

  dataSource: any;
  ngOnInit(): void {
    this.dataSource = this.quiz.getQuizTableDataFinal();
  }
  displayedColumns: string[] = [
    'id',
    'question',
    'choosenAnswer',
    'correctAnswer',
    'result',
  ];
}
