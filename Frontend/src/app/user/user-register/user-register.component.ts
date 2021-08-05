import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  user!: User;
  constructor(private userService: UserServiceService,private http: HttpClient){}


  //Option List for Dropdowns
  genderList: any = ['Male', 'Female', 'Other']

  //CrossValidation Function
  comparePassword: ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value === confirmPassword.value ? null : {identityRevealed: true };
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
    userType: new FormControl(null),
  
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
    var httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
    let body =JSON.stringify(this.userData());

    this.http.post<any>('http://localhost:5000/api/user/add', body,httpOptions).subscribe(data => {
        console.log(data);
        console.log("hi");
    });
    console.log(this.registrationForm);
    if(this.registrationForm.valid){

     // this.user=Object.assign(this.user,this.registrationForm.value);
      this.userService.addUser(this.userData());
    }
  }
  userData(): User{
    return this.user = {
      firstName: this.firstName!.value,
      lastName: this.lastName!.value,
      email: this.email!.value,
      password: this.password!.value,
      mobile: this.mobile!.value,
      gender: this.gender!.value,
      dob: this.dob!.value,
      fatherName: this.fatherName!.value,
      motherName: this.motherName!.value,
      spouseName: this.spouseName!.value,
      address1: this.address1!.value,
      address2: this.address2!.value,
      state: this.state!.value,
      pinCode: this.pinCode!.value,
      country: this.country!.value,
      userType: this.userType!.value

    
    }
  }

  

}
