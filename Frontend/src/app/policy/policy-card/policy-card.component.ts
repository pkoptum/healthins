import { Component, Input, OnInit } from '@angular/core';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';

@Component({
  selector: 'app-policy-card',
  templateUrl: './policy-card.component.html',
  styleUrls: ['./policy-card.component.css']
})
export class PolicyCardComponent implements OnInit {

  @Input() policy !: Policy

  constructor(private deletePolicyService: GetPoliciesService) { }

  ngOnInit() {
  }

  onSubmit(policy: Policy): void{
    this.deletePolicyService.deletePolicy(policy.id).subscribe()
  }

}
