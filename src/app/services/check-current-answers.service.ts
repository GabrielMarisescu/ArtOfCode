import { Injectable, Input } from '@angular/core';

import { GetQuizService } from './get-quiz.service';

@Injectable({
  providedIn: 'root',
})
export class CheckCurrentAnswersService {
  //takes the service and the current answers and it gives you the data that you need to display on the results
  //page

  constructor(private quiz: GetQuizService) {
    console.log(quiz);
  }
}
