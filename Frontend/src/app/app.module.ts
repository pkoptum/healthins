import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PolicyCardComponent } from './policy/policy-card/policy-card.component';
import { PolicyListComponent } from './policy/policy-list/policy-list.component';
import { HousingService } from './services/housing.service';
import { AddPolicyComponent } from './policy/add-policy/add-policy.component';
import { PolicyDetailComponent } from './policy/policy-detail/policy-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { AuthService } from './services/auth.service';
import { MypoliciesComponent } from './policy/mypolicies/mypolicies.component';
import { CustPolicyCardComponent } from './policy/cust-policy-card/cust-policy-card.component';
import { SearchListComponent } from './policy/search-list/search-list.component';
import { MyPoliciesComponent } from './user/my-policies/my-policies.component';


@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PolicyListComponent,
      PolicyCardComponent,
      PolicyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent,
      AddPolicyComponent,
      MypoliciesComponent,
      CustPolicyCardComponent,
      SearchListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HousingService,
    UserServiceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
