import { Component, Input, OnInit } from '@angular/core';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { PolicyReceive } from 'src/app/model/policy';

@Component({
  selector: 'app-cust-policy-card',
  templateUrl: './cust-policy-card.component.html',
  styleUrls: ['./cust-policy-card.component.css']
})
export class CustPolicyCardComponent implements OnInit {

  @Input() policy !: PolicyReceive;

  constructor(private buyPolicyService: GetPoliciesService) { }

  ngOnInit(): void {
  }
  onSubmit(policy: PolicyReceive): void{
    // this.buyPolicyService.buyPolicy(policy).subscribe()
  }

}
