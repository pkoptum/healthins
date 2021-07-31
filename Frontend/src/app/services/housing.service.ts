import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Policy } from 'src/data/policy';
import { Properties } from 'src/data/mock-policy';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HousingService {


  private policyUrl = 'src/data/properties.json';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Policy[]> {
    return of(Properties)
  }

  // getHttpProperties(): Observable<HttpResponse<policy[]>> {
  //   return this.http.get<policy[]>(this.policyUrl, {observe: 'response'});
  // }

  // getAllProperties(){
  //   console.log("2");
  //   return this.http.get('../../data/properties.ts').pipe(
  //     map(data=> {
  //       const propertiesArray: Array<any> = [];
  //       for (const id in data) {
  //         if(data.hasOwnpolicy(id)) {
  //           propertiesArray.push(data.id);
  //         }
  //       }

  //       return propertiesArray;
  //     })
  //   );
  //   console.log("3");
  // }
}
