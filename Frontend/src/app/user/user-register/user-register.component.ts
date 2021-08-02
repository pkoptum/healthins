import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  //Option List for Dropdowns
  genderList: any = ['Male', 'Female', 'Other']
  userList: any = ['Customer', 'Payer', 'Admin']

  //CrossValidation Function
  comparePassword: ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value === confirmPassword.value ? null : {checkPassword: true };
  }

  //Creating User Registration Form
  registrationForm = new FormGroup({

    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, Validators.required),
    mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    gender: new FormControl(null, Validators.required),
    dob: new FormControl(null),
    fatherName: new FormControl(null, Validators.required),
    motherName: new FormControl(null, Validators.required),
    spouseName: new FormControl(null),
    address1: new FormControl(null, Validators.required),
    address2: new FormControl(null),
    state: new FormControl(null, Validators.required),
    pinCode: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    userType: new FormControl(null, Validators.required),

  }, {validators: this.comparePassword});
  
  //Initializers for all the form fields for displaying validation errors
  get firstName(){
    return this.registrationForm.get('firstName')
  }
  get lastName(){
    return this.registrationForm.get('lastName')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword')
  }
  get gender(){
    return this.registrationForm.get('gender')
  }
  get dob(){
    return this.registrationForm.get('dob')
  }
  get fatherName(){
    return this.registrationForm.get('fatherName')
  }
  get motherName(){
    return this.registrationForm.get('motherName')
  }
  get spouseName(){
    return this.registrationForm.get('spouseName')
  }
  get address1(){
    return this.registrationForm.get('address1')
  }
  get address2(){
    return this.registrationForm.get('address2')
  }
  get state(){
    return this.registrationForm.get('state')
  }
  get country(){
    return this.registrationForm.get('country')
  }
  get pinCode(){
    return this.registrationForm.get('pinCode')
  }
  get mobile(){
    return this.registrationForm.get('mobile')
  }
  get userType(){
    return this.registrationForm.get('userType')
  }

  ngOnInit(): void {

  }

  //Submit Form Button
  onSubmit(){
    console.log(this.registrationForm)
  }

}
