import { Component, Input, OnInit } from '@angular/core';
import { Policy } from 'src/data/policy';

@Component({
  selector: 'app-policy-card',
  templateUrl: './policy-card.component.html',
  styleUrls: ['./policy-card.component.css']
})
export class PolicyCardComponent implements OnInit {

  @Input() policy !: Policy

  constructor() { }

  ngOnInit() {
  }

}
