import { Component, OnInit } from '@angular/core';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { Policy } from 'src/data/policy';
import { PolicyReceive } from 'src/app/model/policy';

@Component({
  selector: 'app-mypolicies',
  templateUrl: './mypolicies.component.html',
  styleUrls: ['./mypolicies.component.css']
})
export class MypoliciesComponent implements OnInit {
  policies: PolicyReceive[] = [];

  constructor(private getPolicies: GetPoliciesService ) { }

  ngOnInit(): void {
    this.getPolicies.getMyPolicies().subscribe(
      policies=>this.policies=policies
    )
  }

}
