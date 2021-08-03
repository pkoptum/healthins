import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public loginForm !: FormGroup;
  constructor(private authService: AuthService,private housingService: HousingService) { }
  cityList!: any[];
  ngOnInit(): void {
    this.housingService.getAllCities().subscribe(data=>{
      
      console.log(data);
      console.log("hi");
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])

    }); 
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  } 
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.email)
      console.log('login success');
    }
    else {
      console.log('not succ');
    }

  } 

  // onSubmit(){
  //   console.log(this.loginForm)
  // }

}
