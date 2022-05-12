import { Component, OnInit } from '@angular/core';
import { QuizResults } from 'src/app/interfaces/quiz-interfaces';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss'],
})
export class QuizResultsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  //set this dynamically

  //subscribe to the service and get the data "Subject" or AsyncSubject
  quizResults: QuizResults[] = [
    {
      id: 1,
      question: 'thisthisthis',
      choosenAnswer: 'test',
      correctAnswer: 'test',
    },
    {
      id: 2,
      question: 'thisthisthis',
      choosenAnswer: 'test',
      correctAnswer: 'test',
    },
  ];

  //will add icons x for bad, check for good
  displayedColumns: string[] = [
    'id',
    'question',
    'choosenAnswer',
    'correctAnswer',
    'result',
  ];
  dataSource = this.quizResults;
}
