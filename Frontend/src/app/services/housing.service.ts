import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from 'src/data/property';
import { Properties } from 'src/data/mock-properties';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HousingService {


  private propertyUrl = 'src/data/properties.json';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Property[]> {
    return of(Properties)
  }

  // getHttpProperties(): Observable<HttpResponse<Property[]>> {
  //   return this.http.get<Property[]>(this.propertyUrl, {observe: 'response'});
  // }

  // getAllProperties(){
  //   console.log("2");
  //   return this.http.get('../../data/properties.ts').pipe(
  //     map(data=> {
  //       const propertiesArray: Array<any> = [];
  //       for (const id in data) {
  //         if(data.hasOwnProperty(id)) {
  //           propertiesArray.push(data.id);
  //         }
  //       }

  //       return propertiesArray;
  //     })
  //   );
  //   console.log("3");
  // }
}
