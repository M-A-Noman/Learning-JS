import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StaticSearchComponent } from './components/static-search/static-search.component';
import { HomePageContainerComponent } from './components/home-page-container/home-page-container.component';
import { HomeFacadeService } from './home-facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { MultiCardComponent } from '../../shared/components/multi-card/multi-card.component';
import { SwitchableButtonComponent } from '../../shared/components/switchable-button/switchable-button.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { RattingComponent } from '../../shared/components/ratting/ratting.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [
        HomeComponent,
        StaticSearchComponent,
        HomePageContainerComponent,
        ContainerComponent,
        MultiCardComponent,
        SwitchableButtonComponent,
        CardComponent,
        RattingComponent,
      ],
      providers: [
        HomeFacadeService,
        provideMockStore({}),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // Mock route parameters
            snapshot: { paramMap: { get: (key: string) => '123' } }, // Mock snapshot
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
