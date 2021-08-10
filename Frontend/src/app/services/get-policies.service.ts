import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValuesFromArray, throwError, of } from 'rxjs';
import { Policy } from 'src/app/model/policy';
import { PolicySend } from '../model/policy';
import {PolicyReceive} from '../model/policy';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetPoliciesService {

  // Route Helper Variables
  private getPolicyUrl = 'http://localhost:5000/api/policy';
  private getPayerPolicyUrl = 'https://localhost:5000/api/policy/mycreate';
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


  //Error handling function
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  


  buyPolicy(policy: string): Observable<PolicyReceive> {
    return this.http.post<PolicyReceive>(this.buyPolicyUrl, policy, this.httpOptions)  // urr, policy - id , user-id
  }

  getMyPolicies(userId : string): Observable<PolicyReceive[]> {
    return this.http.get<PolicyReceive[]>(`${this.getMyPoliciesUrl}/${userId}`)     // url, user-id
  }

  //get list of all policies created by a particular payer
  getPayerPolicy(userId:string): Observable<PolicyReceive[]> {
    return this.http.get<PolicyReceive[]>(`${this.getPayerPolicyUrl}/${userId}`)
  }

  //get list of all policies available on the portal
  getPolicies(): Observable<PolicyReceive[]> {
    return this.http.get<PolicyReceive[]>(this.getPolicyUrl).pipe(
      catchError(this.handleError<PolicyReceive[]>('get all policies', []))
    )
  }

  //get detail of a selected policy
  getPolicyDetail( id: string ): Observable<PolicyReceive>{
    return this.http.get<PolicyReceive>(`${this.getDetailUrl}/${id}`)

  }
  //add a new policy to the policy list
  addPolicy(policy: String): Observable<PolicyReceive> {
    return this.http.post<PolicyReceive>(this.addPolicyUrl, policy, this.httpOptions)
  }

  //update the selected policy
  updatePolicy(policy: PolicyReceive): Observable<PolicyReceive> {
    return this.http.put<PolicyReceive>(`${this.updatePolicyUrl}/${policy.id}`, policy, this.httpOptions)
  }

  //Delete a policy from the list
  deletePolicy(id: Number): Observable<PolicyReceive> {
    return this.http.delete<PolicyReceive>(`${this.deleteUrl}/${id}`, this.httpOptions)
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
