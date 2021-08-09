import { Component, OnInit } from '@angular/core';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { Policy } from 'src/app/model/policy';
import { PolicyReceive } from 'src/app/model/policy';

@Component({
  selector: 'app-mypolicies',
  templateUrl: './mypolicies.component.html',
  styleUrls: ['./mypolicies.component.css']
})
export class MypoliciesComponent implements OnInit {
  policies: PolicyReceive[] = [];
  userId = localStorage.getItem('userId')

  constructor(private getPolicies: GetPoliciesService ) { }

  ngOnInit(): void {
    this.getPolicies.getMyPolicies(this.userId!).subscribe(
      policies=>this.policies=policies
    )
  }

}
