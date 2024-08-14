import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchableButtonComponent } from './switchable-button.component';

describe('SwitchableButtonComponent', () => {
  let component: SwitchableButtonComponent;
  let fixture: ComponentFixture<SwitchableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchableButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
