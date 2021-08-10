/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolicyDetailComponent } from './policy-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { of } from 'rxjs';
import { PolicyReceive } from 'src/app/model/policy';

describe('PolicyDetailComponent', () => {
  let component: PolicyDetailComponent;
  let fixture: ComponentFixture<PolicyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ PolicyDetailComponent ],
      providers: [GetPoliciesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call getpayerpolicy ',()=> {
    let fix = TestBed.createComponent(PolicyDetailComponent);
    let comp = fix.debugElement.componentInstance;
    let getpoliciesService = fix.debugElement.injector.get(GetPoliciesService);
    // let stub1 = spyOn(getpoliciesService,"getPolicyDetail").and.callFake(()=> {
    //   return of()
    // })
    // comp.ngOnInit();
    comp.policyId = "1";
    comp.UId = "1";

    const pDummy: PolicyReceive = {
      id:1,
      policyType:"",
      premium:"",
      sumInsured:"",
      coverName:"",
      coverUpto:"",
      termsConditions:"",
      description:"",
      userId:" ",
      email:""
    
  };
    


    let stub = spyOn(getpoliciesService,"buyPolicy").and.callFake( () =>{
      return of()
    } );



    comp.buyPolicy1(pDummy);
    expect(getpoliciesService.buyPolicy).toHaveBeenCalled();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
