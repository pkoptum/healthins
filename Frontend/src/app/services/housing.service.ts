import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

}
