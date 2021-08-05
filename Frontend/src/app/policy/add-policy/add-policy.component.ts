import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {
  policies !: Policy[];

  constructor(private router: Router, private fb:FormBuilder, private policyService: GetPoliciesService) { }

  //Creating User Registration Form
  addPolicyForm = this.fb.group({
    // policyId: ['', [Validators.required]],
    policyType: ['', [Validators.required]],
    coverName: ['', [Validators.required]],
    premium: ['', [Validators.required]],
    sumInsured: ['', [Validators.required]],
    coverUpto: ['', [Validators.required]],
    description: [''],
    termsConditions: [''],
  });  


  // get policyId(){
  //   return this.addPolicyForm.get('policyId')
  // }
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

  addPolicy(policy: Policy): void{
    if(!policy) {return;}
    this.policyService.addPolicy(policy).subscribe(
      policy => {
        this.policies.push(policy);
      })
      this.router.navigate(['/policies']);
  }

  onBack(){
    this.router.navigate(['/']);
    //asa
    //aa
  }

}
