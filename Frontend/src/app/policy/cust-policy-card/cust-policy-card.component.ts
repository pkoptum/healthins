import { Component, Input, OnInit } from '@angular/core';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';

@Component({
  selector: 'app-cust-policy-card',
  templateUrl: './cust-policy-card.component.html',
  styleUrls: ['./cust-policy-card.component.css']
})
export class CustPolicyCardComponent implements OnInit {

  @Input() policy !: Policy;

  constructor(private buyPolicyService: GetPoliciesService) { }

  ngOnInit(): void {
  }
  onSubmit(policy: Policy): void{
    this.buyPolicyService.buyPolicy(policy).subscribe()
  }

}
