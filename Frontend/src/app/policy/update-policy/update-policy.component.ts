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

    // Creating Policy Updation Form
    updatePolicyForm = this.fb.group({
      policyType: [ '', [Validators.required]],
      coverName: [{ value: '', disabled:true}, [Validators.required]],
      premium: ['', [Validators.required]],
      sumInsured: ['', [Validators.required]],
      coverUpto: ['', [Validators.required]],
      description: [{ value: '', disabled:true}],
      termsConditions: [''],
      email: ['']
    });  

  async ngOnInit() {
    this.policyId = (this.route.snapshot.params['id'])
    await this.getDetail()
    console.log("Policy Detail", this.policy);    

  }

  //Get policy Detail
  async getDetail(){
    this.updateService.getPolicyDetail(this.policyId).subscribe(
      (policy) => {
        this.updatePolicyForm = this.fb.group({
          policyType: [ policy.policyType, [Validators.required]],
          coverName: [policy.coverName, [Validators.required]],
          premium: [policy.premium, [Validators.required]],
          sumInsured: [policy.sumInsured, [Validators.required]],
          coverUpto: [policy.coverUpto, [Validators.required]],
          description: [policy.description],
          termsConditions: [policy.termsConditions],
          email: [policy.email]
        });  
      }
    )

  }

  updatePolicy(): void {
    let body = this.policyData()
    if(!body) {return;}
    this.updateService.updatePolicy(body).toPromise().then(() => {
      this.router.navigate(['/policies']);
    })
  }    

  get policyType(){
    return this.updatePolicyForm.get('policyType')
  }
  get coverName(){
    return this.updatePolicyForm.get('coverName')
  }
  get premium(){
    return this.updatePolicyForm.get('premium')
  }
  get sumInsured(){
    return this.updatePolicyForm.get('sumInsured')
  }
  get description(){
    return this.updatePolicyForm.get('description')
  }
  get termsConditions(){
    return this.updatePolicyForm.get('termsConditions')
  }
  get coverUpto(){
    return this.updatePolicyForm.get('coverUpto')
  }
  get email(){
    return this.updatePolicyForm.get('email')
  }
  
  policyData(): PolicyReceive{
    console.log("Policy Update", this.policy)
    return this.updatedPolicy = {
      id: Number(this.policyId),
      policyType: this.policyType!.value,
      coverName: this.coverName!.value,
      premium: this.premium!.value,
      sumInsured: this.sumInsured!.value,
      coverUpto: this.coverUpto!.value,
      description: this.description!.value,
      termsConditions: this.termsConditions!.value,
      userId: (this.id)?.toString(),
      email: this.email!.value
    }
  }    

}
