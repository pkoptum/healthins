import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Policy } from 'src/data/policy';
import { Policies } from 'src/data/mock-policy';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HousingService {


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }


  getAllCities(): Observable<string []>{
    return this.http.get<string[]>('http://localhost:5000/api/city');
  }

  getPolicies(): Observable<Policy[]> {
    return of(Policies)
  }

  // getHttpPolicies(): Observable<HttpResponse<policy[]>> {
  //   return this.http.get<policy[]>(this.policyUrl, {observe: 'response'});
  // }

  // getAllPolicies(){
  //   console.log("2");
  //   return this.http.get('../../data/Policies.ts').pipe(
  //     map(data=> {
  //       const PoliciesArray: Array<any> = [];
  //       for (const id in data) {
  //         if(data.hasOwnpolicy(id)) {
  //           PoliciesArray.push(data.id);
  //         }
  //       }

  //       return PoliciesArray;
  //     })
  //   );
  //   console.log("3");
  // }
}
