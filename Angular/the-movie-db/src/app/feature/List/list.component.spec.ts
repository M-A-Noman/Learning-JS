import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { RattingComponent } from '../../shared/components/ratting/ratting.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListFacadeService } from './services/list-facade.service';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, NoopAnimationsModule, FormsModule],
      declarations: [ListComponent, FilterComponent, CardComponent, RattingComponent],
      providers: [
        ListFacadeService,
        SharedFacadeService,
        provideMockStore({}),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => key === 'list-type' ? 'mock-type' : 'mock-subtype'
            }),
            queryParamMap: of({
              keys: ['param1', 'param2'],
              get: (key: string) => key === 'param1' ? 'value1' : 'value2'
            })
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
