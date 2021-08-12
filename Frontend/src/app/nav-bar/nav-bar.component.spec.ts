/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GetPoliciesService } from '../services/get-policies.service';

import { NavBarComponent } from './nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ NavBarComponent ],
      providers: [GetPoliciesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    interface StringArray {
      [index: string]: string;
    }
    let store: StringArray={};
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


  it('return admin from local storage', () => {
    localStorage.setItem('key', 'admin');
    expect(localStorage.getItem('key')).toBe('admin');
    
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Checking component name',()=>{
    expect(component.componentName).toBe("naval")
  })
});
