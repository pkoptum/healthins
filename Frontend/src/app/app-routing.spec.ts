import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, convertToParamMap, RouterLinkWithHref } from '@angular/router';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { GetPoliciesService } from './services/get-policies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes} from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { PolicyListComponent } from './policy/policy-list/policy-list.component';
import { AddPolicyComponent } from './policy/add-policy/add-policy.component';
import { MypoliciesComponent } from './policy/mypolicies/mypolicies.component';
import { UpdatePolicyComponent } from './policy/update-policy/update-policy.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { PolicyDetailComponent } from './policy/policy-detail/policy-detail.component';
import { UserServiceService } from './services/user-service.service';
import { AuthService } from './services/auth.service';

import { By } from 'protractor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchListComponent } from './policy/search-list/search-list.component';
import { of } from 'rxjs';

const routes: Routes = [
    {path: '', component: UserLoginComponent, pathMatch: 'full'},
    {path: 'policies', component: PolicyListComponent},
    {path: 'add-policy', component: AddPolicyComponent},
    {path: 'policy-detail/:id', component: PolicyListComponent},
    {path: 'user/login', component: UserLoginComponent},
    {path: 'user/register', component: UserRegisterComponent},
    {path: 'mypolicies', component: MypoliciesComponent},
    {path: 'update-policy/:id', component: UpdatePolicyComponent},
    {path: '**', component: PolicyListComponent}
    
  ];

describe('AppComponent Routing Example', () => {
    let router: Router;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;
    let location: Location;
    let policyService: GetPoliciesService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule.withRoutes(routes),
                HttpClientModule,
                ReactiveFormsModule
            ],

            declarations: [
                AppComponent,
                NavBarComponent,
                SearchListComponent,
                PolicyListComponent,
                PolicyDetailComponent,
                UserLoginComponent,
                UserRegisterComponent,
                AddPolicyComponent,
                MypoliciesComponent,
                UpdatePolicyComponent
            ],
            providers: [
                GetPoliciesService,
                UserServiceService,
                AuthService
            ]
        }).compileComponents();
    }))

    beforeEach(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        debugElement = fixture.debugElement;
        policyService = TestBed.get(GetPoliciesService)

        router.initialNavigation();
    })

    it('should test redirection to default path', async(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(location.path()).toBe('/')
        })
    }))


    it('navigate to "policies" takes you to /policies', fakeAsync(() => {
        router.navigate(['policies']);
        tick();
        expect(location.path()).toBe('/policies');
      }));


      it('navigate to "add-policy" takes you to /add-policy', fakeAsync(() => {
        router.navigate(['add-policy']);
        tick();
        expect(location.path()).toBe('/add-policy');
      }));   


      it('navigate to "my-policies" takes you to /my-policies', fakeAsync(() => {
        router.navigate(['my-policies']);
        tick();
        expect(location.path()).toBe('/my-policies');
      }));   
      
      it('navigate to "user/login" takes you to /user/login', fakeAsync(() => {
        router.navigate(['user/login']);
        tick();
        expect(location.path()).toBe('/user/login');
      }));        


      it('navigate to "user/register" takes you to /user/register', fakeAsync(() => {
        router.navigate(['user/register']);
        tick();
        expect(location.path()).toBe('/user/register');
      }));  
      
      
    
    // it('should navigate to policies', fakeAsync(() => {
    //     fixture.detectChanges();
    //     let links = debugElement.queryAll(By.directive(RouterLinkWithHref));
    //     links[1].nativeElement.click();
    //     tick();
    //     expect(location.path()).toBe('/policies')
    // }))
})