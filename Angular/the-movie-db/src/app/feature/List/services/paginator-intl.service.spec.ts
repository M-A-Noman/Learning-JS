import { TestBed } from '@angular/core/testing';

import { PaginatorIntlService } from './paginator-intl.service';

describe('PaginatorIntlService', () => {
  let service: PaginatorIntlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[PaginatorIntlService]
    });
    service = TestBed.inject(PaginatorIntlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
