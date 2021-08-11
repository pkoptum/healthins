/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolicyCardComponent } from './policy-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { PolicyReceive } from 'src/app/model/policy';
import { of } from 'rxjs';
import { computeMsgId } from '@angular/compiler';

describe('PolicyCardComponent', () => {
  let component: PolicyCardComponent;
  let fixture: ComponentFixture<PolicyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ PolicyCardComponent ],
      providers: [GetPoliciesService, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyCardComponent);
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

  

  // it('should call onSubmit ',()=> {
  //   let fix = TestBed.createComponent(PolicyCardComponent);
  //   let comp = fix.debugElement.componentInstance;
  //   let getpoliciesService = fix.debugElement.injector.get(GetPoliciesService);
  //   // let stub1 = spyOn(getpoliciesService,"getPolicyDetail").and.callFake(()=> {
  //   //   return of()
  //   // })
  //   // comp.ngOnInit();
  //   // comp.policyId = "1";
  //   // comp.UId = "1";

  //   // let pDummy: PolicyReceive;
  //   // pDummy.id =1;
  //   const pDummy: PolicyReceive = {
  //     id:1,
  //     policyType:"",
  //     premium:"",
  //     sumInsured:"",
  //     coverName:"",
  //     coverUpto:"",
  //     termsConditions:"",
  //     description:"",
  //     userId:" ",
  //     email:""
    
  // };

  //   let stub = spyOn(getpoliciesService,"deletePolicy").and.callFake( () =>{
  //     return of()
  //   } );



  //   comp.onSubmit(pDummy);
  //   expect(getpoliciesService.deletePolicy).toHaveBeenCalled();
  // });

  it('should call deletepolicy ',()=> {
    let fix = TestBed.createComponent(PolicyCardComponent);
    let comp = fix.debugElement.componentInstance;
    let getpoliciesService = fix.debugElement.injector.get(GetPoliciesService);
    // let stub1 = spyOn(getpoliciesService,"getPolicyDetail").and.callFake(()=> {
    //   return of()
    // })
    // comp.ngOnInit();
    

    // let pDummy: PolicyReceive;
    // pDummy.id =1;
    const pDummy: PolicyReceive = {
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
  // comp.policy=pDummy;
  // fix.detectChanges();

    let stub = spyOn(getpoliciesService,"deletePolicy").and.callFake( () =>{
      return of();
    } );


    
    component.onSubmit(pDummy);
    expect(getpoliciesService.deletePolicy).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
