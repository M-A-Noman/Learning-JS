import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionResultComponent } from './admission-result.component';

describe('AdmissionResultComponent', () => {
  let component: AdmissionResultComponent;
  let fixture: ComponentFixture<AdmissionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmissionResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
