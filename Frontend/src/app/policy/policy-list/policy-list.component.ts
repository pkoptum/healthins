
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from 'src/app/services/get-policies.service';
import { PolicySend } from 'src/app/model/policy';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[] = [];


  constructor(private http: HttpClient, private housingService: HousingService, private getPolicies: GetPoliciesService) { }

  ngOnInit(): void {
    // this.housingService.getHttpProperties().subscribe(resp => console.log(resp))

    this.getPolicies.getPolicies().subscribe(
      policies=>{this.policies=policies}
    );

    console.log(this.policies)
    
    // this.housingService.getPolicies().subscribe(
    //   policies=>this.policies=policies
    // );
  }

}
