import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StaticSearchComponent } from './components/static-search/static-search.component';
import { HomePageContainerComponent } from './components/home-page-container/home-page-container.component';
import { HomeFacadeService } from './home-facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { MultiCardComponent } from '../../shared/components/multi-card/multi-card.component';
import { SwitchableButtonComponent } from '../../shared/components/switchable-button/switchable-button.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { RattingComponent } from '../../shared/components/ratting/ratting.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import * as fromPopular from './state/reducers/popular.reducer';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;
  
  const initialState = { popular: fromPopular.initialPopularState };
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
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // Mock route parameters
            snapshot: { paramMap: { get: (key: string) => '123' } }, // Mock snapshot
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select popular data from store', () => {
    store.setState({ popular: { data: { page: 1, results: [], total_pages: 1, total_results: 1 }, loading: false, error: null } });
    component.ngOnInit();
    store.select(fromPopular.selectData).subscribe((data) => {
      expect(data).toEqual({ page: 1, results: [], total_pages: 1, total_results: 1 });
    });
  });
});


// action test

// import * as PopularActions from './popular.actions';

// describe('Popular Actions', () => {
//   it('should create a loadPopular action with the correct data', () => {
//     const data = 'some data';
//     const action = PopularActions.loadPopular({ data });
//     expect(action.type).toEqual('[Popular] Load Popular');
//     expect(action.data).toEqual(data);
//   });

//   it('should create a loadPopularSuccess action with the correct payload', () => {
//     const data: PageCardData = { page: 1, results: [], total_pages: 1, total_results: 1 };
//     const action = PopularActions.loadPopularSuccess({ data });
//     expect(action.type).toEqual('[Popular] Load Popular Success');
//     expect(action.data).toEqual(data);
//   });

//   it('should create a loadPopularFailure action with the correct error', () => {
//     const error = 'some error';
//     const action = PopularActions.loadPopularFailure({ error });
//     expect(action.type).toEqual('[Popular] Load Popular Failure');
//     expect(action.error).toEqual(error);
//   });
// });


// reducer test


// import { popularReducer, initialPopularState } from './popular.feature';
// import * as PopularActions from './popular.actions';
// import { PageCardData } from '../../model/cardModel';

// describe('Popular Reducer', () => {
//   it('should return the initial state for an unknown action', () => {
//     const action = { type: 'Unknown' } as any;
//     const state = popularReducer(initialPopularState, action);

//     expect(state).toBe(initialPopularState);
//   });

//   it('should set loading to true on loadPopular action', () => {
//     const action = PopularActions.loadPopular({ data: 'test' });
//     const state = popularReducer(initialPopularState, action);

//     expect(state.loading).toBe(true);
//   });

//   it('should update the state correctly on loadPopularSuccess action', () => {
//     const data: PageCardData = { page: 1, results: [], total_pages: 1, total_results: 1 };
//     const action = PopularActions.loadPopularSuccess({ data });
//     const state = popularReducer(initialPopularState, action);

//     expect(state.loading).toBe(false);
//     expect(state.data).toEqual(data);
//   });

//   it('should set loading to false and store error on loadPopularFailure action', () => {
//     const error = 'some error';
//     const action = PopularActions.loadPopularFailure({ error });
//     const state = popularReducer(initialPopularState, action);

//     expect(state.loading).toBe(false);
//     expect(state.error).toEqual(error);
//   });
// });


// selector test

// import * as fromPopular from './popular.feature';
// import { PageCardData } from '../../model/cardModel';

// describe('Popular Selectors', () => {
//   it('should select the data from the state', () => {
//     const data: PageCardData = { page: 1, results: [], total_pages: 1, total_results: 1 };
//     const state: fromPopular.PopularState = { data, loading: false, error: null };

//     expect(fromPopular.selectData.projector(state)).toEqual(data);
//   });

//   it('should select the loading status from the state', () => {
//     const state: fromPopular.PopularState = { data: null, loading: true, error: null };

//     expect(fromPopular.selectLoading.projector(state)).toEqual(true);
//   });

//   it('should select the error from the state', () => {
//     const error = 'some error';
//     const state: fromPopular.PopularState = { data: null, loading: false, error };

//     expect(fromPopular.selectError.projector(state)).toEqual(error);
//   });
// });
