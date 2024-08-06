import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSearchComponent } from './static-search.component';

describe('StaticSearchComponent', () => {
  let component: StaticSearchComponent;
  let fixture: ComponentFixture<StaticSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
