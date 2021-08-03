import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css']
})
export class PolicyDetailComponent implements OnInit {
  public policyId !: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.policyId = Number(this.route.snapshot.params['id'])
    this.route.params.subscribe(
      (params) => {
        this.policyId = +params['id'];
      }
    )
  }

  onSelectNext(){
    this.policyId += 1;
    this.router.navigate(['policy-detail/' + this.policyId])
  }

  onSelectBack(){
    this.policyId -= 1;
    this.router.navigate(['policy-detail/' + this.policyId])
  }
  
}
