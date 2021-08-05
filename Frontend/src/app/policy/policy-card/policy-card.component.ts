import { Component, Input, OnInit } from '@angular/core';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { Router } from '@angular/router';
import { PolicyReceive } from 'src/app/model/policy';

@Component({
  selector: 'app-policy-card',
  templateUrl: './policy-card.component.html',
  styleUrls: ['./policy-card.component.css']
})
export class PolicyCardComponent implements OnInit {

  @Input() policy !: PolicyReceive

  constructor(private deletePolicyService: GetPoliciesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(policy: PolicyReceive): void{
    this.deletePolicyService.deletePolicy(policy.id).subscribe()
    window.location.reload()
    this.router.navigate(['/policies']);
  }

  loggedin() {
      return localStorage.getItem('userType');  
  }

  isPayer() {
    if(localStorage.getItem('userType')=='payer') {
      return localStorage.getItem('userType');
    } else {
      return null;
    }
  }
}
