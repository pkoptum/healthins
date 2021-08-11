import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustPolicyCardComponent } from './cust-policy-card.component';
import { PolicyReceive } from 'src/app/model/policy';

describe('CustPolicyCardComponent', () => {
  let component: CustPolicyCardComponent;
  let fixture: ComponentFixture<CustPolicyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ CustPolicyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustPolicyCardComponent);
    component = fixture.componentInstance;
    const pmy: PolicyReceive = {
      id:1,
      policyType:"test",
      premium:"test",
      sumInsured:"test",
      coverName:"test",
      coverUpto:"test",
      termsConditions:"test",
      description:"test",
      userId:" test",
      email:"test@test.c"
    
  };
  component.policy=pmy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
