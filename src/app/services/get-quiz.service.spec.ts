import { TestBed } from '@angular/core/testing';

import { GetQuizService } from './get-quiz.service';

describe('GetQuizService', () => {
  let service: GetQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
