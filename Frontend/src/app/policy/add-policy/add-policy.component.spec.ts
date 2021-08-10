/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddPolicyComponent } from './add-policy.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { FormBuilder } from '@angular/forms';
import { PolicySend } from 'src/app/model/policy';
import { of } from 'rxjs';

describe('AddPolicyComponent', () => {
  let component: AddPolicyComponent;
  let fixture: ComponentFixture<AddPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ AddPolicyComponent ],
      providers: [GetPoliciesService, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add data', () => {

    const policydata:PolicySend= {
      
      policyType:"test",
      premium:"test",
      sumInsured:"test",
      coverName:"test",
      coverUpto:"test",
      termsConditions:"test",
      description:"test",
      userId:" test",
      email:"test@test.c"
    

    }
    
    let getpoliciesService = fixture.debugElement.injector.get(GetPoliciesService);
    let stub = spyOn(getpoliciesService,"addPolicy").and.callFake( () =>{
      return of();
    } );
    component.addPolicy();
    expect(getpoliciesService.addPolicy).toHaveBeenCalled();
  });
});
