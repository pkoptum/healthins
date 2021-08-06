import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { PolicySend } from 'src/app/model/policy';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {
  policies !: Policy[];
  policy !: PolicySend;
  id = localStorage.getItem('userId');


  constructor(private router: Router, private fb:FormBuilder, private policyService: GetPoliciesService) { }

  //Creating User Registration Form
  addPolicyForm = this.fb.group({
    policyType: ['', [Validators.required]],
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


  ngOnInit() {
  }


  addPolicy(): void {
    let body = JSON.stringify(this.policyData());
    if(!body) {return;}
    this.policyService.addPolicy(body).toPromise().then(() => {
      this.router.navigate(['/policies']);
    })
  }


  policyData(): PolicySend{
    return this.policy = {
      policyType: this.policyType!.value,
      coverName: this.coverName!.value,
      premium: this.premium!.value,
      sumInsured: this.sumInsured!.value,
      coverUpto: this.coverUpto!.value,
      description: this.description!.value,
      termsConditions: this.termsConditions!.value,
      userId: (this.id)?.toString()
    }
  }  


  onBack(){
    this.router.navigate(['/']);
  }

}
