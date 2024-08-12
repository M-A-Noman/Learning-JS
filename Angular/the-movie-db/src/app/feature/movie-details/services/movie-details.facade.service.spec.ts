import { TestBed } from '@angular/core/testing';

import { MovieDetailsFacadeService } from './movie-details.facade.service';

describe('MovieDetailsFacadeService', () => {
  let service: MovieDetailsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDetailsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
