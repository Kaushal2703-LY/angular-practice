import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusKycComponent } from './aus-kyc.component';

describe('AusKycComponent', () => {
  let component: AusKycComponent;
  let fixture: ComponentFixture<AusKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusKycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
