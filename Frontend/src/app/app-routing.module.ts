import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './policy/add-policy/add-policy.component';
import { PolicyDetailComponent } from './policy/policy-detail/policy-detail.component';
import { PolicyListComponent } from './policy/policy-list/policy-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  {path: '', component: PolicyListComponent, pathMatch: 'full'},
  {path: 'rent-policy', component: PolicyListComponent},
  {path: 'add-policy', component: AddPolicyComponent},
  {path: 'policy-detail/:id', component: PolicyDetailComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: '**', component: PolicyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
