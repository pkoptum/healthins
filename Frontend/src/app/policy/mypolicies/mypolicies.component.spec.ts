import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MypoliciesComponent } from './mypolicies.component';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { of } from 'rxjs';

describe('MypoliciesComponent', () => {
  let component: MypoliciesComponent;
  let fixture: ComponentFixture<MypoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ MypoliciesComponent ],
      providers: [GetPoliciesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    let getpoliciesService = fixture.debugElement.injector.get(GetPoliciesService);
    let stub = spyOn(getpoliciesService,"getMyPolicies").and.callFake( () =>{
      return of();
    } );
    component.ngOnInit();
    expect(getpoliciesService.getMyPolicies).toHaveBeenCalled();
  });
});
