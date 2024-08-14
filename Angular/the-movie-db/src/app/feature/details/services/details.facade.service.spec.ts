import { TestBed } from '@angular/core/testing';

import { DetailsFacadeService } from './details.facade.service';

describe('MovieDetailsFacadeService', () => {
  let service: DetailsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
