
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Policy } from 'src/data/policy';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[] = [];


  constructor(private http: HttpClient, private housingService: HousingService) { }

  ngOnInit(): void {
    // this.housingService.getHttpProperties().subscribe(resp => console.log(resp))

    this.housingService.getPolicies().subscribe(
      policies=>this.policies=policies
    );
  }

}
