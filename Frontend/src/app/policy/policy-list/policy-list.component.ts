
import { Component, OnInit } from '@angular/core';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { PolicyReceive } from 'src/app/model/policy';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  userId = localStorage.getItem('userId');

  policies: PolicyReceive[] = [];


  constructor( private getPolicies: GetPoliciesService) { }

  async ngOnInit() {

    await this.getAllPolicies();

  }

  async getAllPolicies() {
    console.log("userid", this.userId)
    this.getPolicies.getPayerPolicy(this.userId!).subscribe(
      policies => {this.policies=policies}
    )
    // this.getPolicies.getPolicies().subscribe(
    //   policies=>{this.policies=policies}
    // );
  }

}
