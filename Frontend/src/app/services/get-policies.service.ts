import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValuesFromArray, throwError, of } from 'rxjs';
import { Policy } from 'src/data/policy';
import { PolicySend } from '../model/policy';
import {PolicyReceive} from '../model/policy';

@Injectable({
  providedIn: 'root'
})
export class GetPoliciesService {

  // Route Helper Variables
  private getPolicyUrl = 'http://localhost:5000/api/policy';

  private getDetailUrl = 'http://localhost:5000/api/policy/detail';
  private getMyPoliciesUrl = 'http://localhost:5000/api/purchase/mypolicies';
  private buyPolicyUrl = 'http://localhost:5000/api/purchase/add';
  private addPolicyUrl = 'http://localhost:5000/api/policy/add';
  private deleteUrl = 'http://localhost:5000/api/policy/delete';
  private searchUrl= 'http://localhost:5000/api/policy';
  private updatePolicyUrl = 'http://localhost:5000/api/policy/update';

  httpOptions = {

    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }


  getMyPolicies(userId : string): Observable<PolicyReceive[]> {
    return this.http.get<PolicyReceive[]>(`${this.getMyPoliciesUrl}/${userId}`)     // url, user-id
  }

  buyPolicy(policy: string): Observable<PolicyReceive> {
    return this.http.post<PolicyReceive>(this.buyPolicyUrl, policy, this.httpOptions)  // urr, policy - id , user-id
  }

  //get list of all policies available on the portal
  getPolicies(): Observable<PolicyReceive[]> {
    return this.http.get<PolicyReceive[]>(this.getPolicyUrl)  //url
  }

  //get detail of a selected policy
  getPolicyDetail( id: string ): Observable<PolicyReceive>{
    return this.http.get<PolicyReceive>(`${this.getDetailUrl}/${id}`)

  }
  //add a new policy to the policy list
  addPolicy(policy: String): Observable<Policy> {
    return this.http.post<Policy>(this.addPolicyUrl, policy, this.httpOptions)
  }

  //update the selected policy
  updatePolicy(policy: PolicyReceive): Observable<Policy> {
    return this.http.put<Policy>(`${this.updatePolicyUrl}/${policy.id}`, policy, this.httpOptions)
  }

  //Delete a policy from the list
  deletePolicy(id: Number): Observable<Policy> {
    return this.http.delete<Policy>(`${this.deleteUrl}/${id}`, this.httpOptions)
  }

  //search policy in the policy list
  searchPolicy(term: string): Observable<PolicyReceive[]> {
    console.log("Checking")
    if(!term.trim()){
      console.log("blank")
      return of([]);
    }
    return this.http.get<PolicyReceive[]>(`${this.searchUrl}/?name=${term}`)
  }


  constructor(private http: HttpClient) { }
}
