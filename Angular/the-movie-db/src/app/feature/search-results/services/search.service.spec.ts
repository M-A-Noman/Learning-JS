import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { SharedFacadeService } from '../../../../../shared/services/shared.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SharedFacadeService]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});