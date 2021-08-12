/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolicyListComponent } from './policy-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { of } from 'rxjs';

describe('PolicyListComponent', () => {
  let component: PolicyListComponent;
  let fixture: ComponentFixture<PolicyListComponent>;
  // let getPayerPolicyStub: Partial<GetPoliciesService>

  beforeEach(async(() => {

    //
    //stub The getpoliciesService
    // getPayerPolicyStub = {
    //   getPayerPolicy(){

    //   }

    // }


    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ PolicyListComponent ],
      providers: [GetPoliciesService]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    
    fixture = TestBed.createComponent(PolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    interface StringArray {
      [index: string]: string;
    }
    let store: StringArray={};
//    const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];
    const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : "";
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
    };
    spyOn(localStorage,'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage,'setItem').and.callFake(mockLocalStorage.setItem);
  });

  it('should call getpayerpolicy and return[]',()=> {
    let fix = TestBed.createComponent(PolicyListComponent);
    let comp = fix.debugElement.componentInstance;
    let getpoliciesService = fix.debugElement.injector.get(GetPoliciesService);
    let stub = spyOn(getpoliciesService,"getPayerPolicy").and.callFake(()=> {
      return of([ ])
    })
    comp.getAllPolicies();
    expect(comp.policies).toEqual([ ]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //testing mock local storage
  it('localstorage should return Test', () => {
    localStorage.setItem('tempkey', 'anothertoken');
    expect(localStorage.getItem('tempkey')).toBe('anothertoken');
  });

  
});
