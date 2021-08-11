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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('h1 should be Add New Policy', () => {
    const bannerDe: DebugElement = fixture.debugElement ;
    const myElement: HTMLElement = bannerDe.nativeElement;
    const h1 = myElement.querySelector('h1')!;
    expect(h1.textContent).toEqual('Add New Policy');
  })

  it('button should be to add new policy', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const myElement: HTMLElement = bannerDe.nativeElement;
    const button = myElement.querySelector('button')!;
    expect(button.textContent).toEqual('Create Policy');  
  })
});
