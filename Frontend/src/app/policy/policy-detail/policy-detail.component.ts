import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { Policies } from 'src/data/mock-policy';
import { PolicyReceive } from 'src/app/model/policy';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css']
})
export class PolicyDetailComponent implements OnInit {
  public policyId !: string;
  public UId=localStorage.getItem('userId');

  constructor(private route: ActivatedRoute, private router: Router, private getPolicies: GetPoliciesService) { }
 
  policies!: PolicyReceive;
  
  


  ngOnInit() {
    this.policyId = (this.route.snapshot.params.id)
    // this.route.params.subscribe(
    //   (params) => {
    //     this.policyId = +params['id'];
    //   }
    // )
    console.log("PolicyID", this.policyId)
    this.getPolicies.getPolicyDetail(this.policyId).subscribe(
      policies=>this.policies=policies
    )
  
  }
  buyPolicy(policy: PolicyReceive){
    console.log("asdasd",policy.id);
    var body=JSON.stringify({"UId":this.UId,
  "PolicyId":policy.id});
    this.getPolicies.buyPolicy(body).subscribe()
  }

  isPayer()
  {
    if(localStorage.getItem('userType')=='Payer')
    {
      
      return localStorage.getItem('userType');
      
    }
    else{
      return null;
    }
  }



  getPolicy(){

  }
  
}
