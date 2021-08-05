import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPolicyCardComponent } from './cust-policy-card.component';

describe('CustPolicyCardComponent', () => {
  let component: CustPolicyCardComponent;
  let fixture: ComponentFixture<CustPolicyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustPolicyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustPolicyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
