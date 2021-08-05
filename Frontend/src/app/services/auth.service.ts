import { Injectable } from '@angular/core';
import { userLogin } from '../model/userLogin';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  authUser(user: userLogin){

    // let UserArray = [];
    // if(localStorage.getItem('Users')){
    //   UserArray=JSON.parse(localStorage.getItem('Users')!);
    // }
    // return UserArray.find((p:any) => p.email === user.email && p.password === user.password);
    const temp="http://localhost:5000/api/user/login?"+"email="+user.email+"&password="+user.password;
    console.log("creds",user.email,user.password);
    console.log("testing",this.http.post<any>("http://localhost:5000/api/user/login",user).subscribe(x=>{
      console.log(x);
      
    }));
    // console.log("body",body);
    // console.log("authuser",this.http.post("http://localhost:5000/api/user/login",{body}));
    return this.http.post<any>("http://localhost:5000/api/user/login",user);
  }
}
