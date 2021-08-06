import { Component, OnInit } from '@angular/core';
import { PolicyReceive, PolicySend } from 'src/app/model/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Policy } from 'src/data/policy';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  policy !: PolicyReceive;
  policyId !: string;
  updatedPolicy !: PolicyReceive;
  policies !: Policy[];
  id = localStorage.getItem('userId');

  constructor(private updateService: GetPoliciesService, private route: ActivatedRoute, private fb:FormBuilder, private router: Router) { }

  async ngOnInit() {
    this.policyId = (this.route.snapshot.params['id'])
    await this.getDetail();
    // await this.updateService.getPolicyDetail(this.policyId).subscribe(
    //   policy=>this.policy=this.policy
      
    // )
    console.log("Policy Detail", this.policy)

  }

  //Get policy Detail
  async getDetail(){
    this.updateService.getPolicyDetail(this.policyId).subscribe(
      policy=>this.policy=policy
      
    )
  }

  updatePolicy(): void {
    let body = this.policyData()
    // let body = JSON.stringify(this.policyData());
    console.log(body)
    if(!body) {return;}
    this.updateService.updatePolicy(body).toPromise().then(() => {
      this.router.navigate(['/policies']);
    })
  }    


  // Creating User Registration Form
  addPolicyForm = this.fb.group({
    policyType: [ '', [Validators.required]],
    coverName: ['', [Validators.required]],
    premium: ['', [Validators.required]],
    sumInsured: ['', [Validators.required]],
    coverUpto: ['', [Validators.required]],
    description: [''],
    termsConditions: [''],
  });  


  get policyType(){
    return this.addPolicyForm.get('policyType')
  }
  get coverName(){
    return this.addPolicyForm.get('coverName')
  }
  get premium(){
    return this.addPolicyForm.get('premium')
  }
  get sumInsured(){
    return this.addPolicyForm.get('sumInsured')
  }
  get description(){
    return this.addPolicyForm.get('description')
  }
  get termsConditions(){
    return this.addPolicyForm.get('termsConditions')
  }
  get coverUpto(){
    return this.addPolicyForm.get('coverUpto')
  }
  
  policyData(): PolicyReceive{
    console.log("Policy Update", this.policy)
    return this.updatedPolicy = {
      id: this.policy!.id,
      policyType: this.policyType!.value,
      coverName: this.coverName!.value,
      premium: this.premium!.value,
      sumInsured: this.sumInsured!.value,
      coverUpto: this.coverUpto!.value,
      description: this.description!.value,
      termsConditions: this.termsConditions!.value,
      userId: (this.id)?.toString(),
      email: this.policy!.email
    }
  }    

}
