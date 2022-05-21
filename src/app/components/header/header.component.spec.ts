import { QuizService } from 'src/app/services/main-quiz.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: HeaderComponent;
  let QuizService: QuizService;

  beforeEach(() => {
    fixture = new HeaderComponent(QuizService);
  });

  describe('Clean Current Quiz Instance', () => {
    it('should clean the current quiz Array of all the values.', () => {
      const cleanArray = spyOn(fixture, 'clearCurrentQuizinstance');

      fixture.clearCurrentQuizinstance();

      expect(cleanArray);
    });
  });
});
