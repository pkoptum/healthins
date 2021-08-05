import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValuesFromArray, throwError, of } from 'rxjs';
import { Policy } from 'src/data/policy';
import { PolicySend } from '../model/policy';

@Injectable({
  providedIn: 'root'
})
export class GetPoliciesService {

  // Route Helper Variables
  private getPolicyUrl = 'http://localhost:5000/api/policy';

  private getDetailUrl = '';
  private getMyPoliciesUrl = '';
  private buyPolicyUrl = '';
  private addPolicyUrl = 'http://localhost:5000/api/policy/add';
  private deleteUrl = 'http://localhost:5000/api/policy/delete';
  private searchUrl= 'http://localhost:5000/api/policy';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }


  getMyPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.getMyPoliciesUrl,)
  }

  buyPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(this.buyPolicyUrl, policy, this.httpOptions)
  }

  //get list of all policies available on the portal
  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.getPolicyUrl)
  }

  getPolicyDetail( id: string ): Observable<Policy>{
    return this.http.get<Policy>(`${this.getDetailUrl}/?id=${id}`)
  }
  //add a new policy to the policy list
  addPolicy(policy: String): Observable<Policy> {
    return this.http.post<Policy>(this.addPolicyUrl, policy, this.httpOptions)
  }

  //Delete a policy from the list
  deletePolicy(id: Number): Observable<Policy> {
    return this.http.delete<Policy>(`${this.deleteUrl}/${id}`, this.httpOptions)
  }

  //search policy in the policy list
  searchPolicy(term: string): Observable<Policy[]> {
    console.log("Checking")
    if(!term.trim()){
      return of([]);
    }
    console.log(term)
    return this.http.get<Policy[]>(`${this.searchUrl}/?name=${term}`)
  }

  constructor(private http: HttpClient) { }
}
