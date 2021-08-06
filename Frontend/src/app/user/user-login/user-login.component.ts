import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HousingService } from 'src/app/services/housing.service';
import { userLogin } from 'src/app/model/userLogin';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public loginForm !: FormGroup;
  user!:userLogin;
  constructor(private authService: AuthService,private housingService: HousingService, private router: Router) { }
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

  userDa(): userLogin {
    return this.user = {
      email: this.email!.value,
      password: this.password!.value,

//   onLogin(loginForm: NgForm){
//     console.log('ffform',loginForm);
//     const token = this.authService.authUser(loginForm.value);
//     if(token){
//       localStorage.setItem('token',token.email)
//       console.log('login success');
//     }
//     else {
//       console.log('not succ');

    }
  }
  onLogin(loginForm: NgForm){
    // console.log(loginForm.value);
    // const token = this.authService.authUser(loginForm.value);
    // if(token){
    //   localStorage.setItem('token',token.email)
    //   console.log('login success');
    // }
    // else {
    //   console.log( 'not succ');
    // }
    
    const token = this.authService.authUser(loginForm.value).subscribe(
      (Response) =>{
        const users=Response;
        console.log("hey",Response);
        localStorage.setItem('email',users.email);
        localStorage.setItem('userType',users.userType);
        localStorage.setItem('userId',users.id);
        console.log("LS", localStorage)
      }


    )

    if(localStorage.getItem('userId')) {
      this.router.navigate(['/policies']);
    }
    // dummy delete after test 
    //
    //

    // localStorage.setItem('email','aa@aa');
    // localStorage.setItem('userType','payer');
    // localStorage.setItem('userId','1');
    //
    //
    //
    // dummy close


    console.log("Local Storage ",localStorage);

  } 

  // onSubmit(){
  //   console.log(this.loginForm)
  // }

}
