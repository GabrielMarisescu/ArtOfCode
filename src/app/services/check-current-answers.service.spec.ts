import { TestBed } from '@angular/core/testing';

import { CheckCurrentAnswersService } from './check-current-answers.service';

describe('CheckCurrentAnswersService', () => {
  let service: CheckCurrentAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckCurrentAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
