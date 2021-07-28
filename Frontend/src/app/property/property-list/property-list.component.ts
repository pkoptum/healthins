import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "id": 1,
      "Type": "House",
      "Name": "Gulmohar Villa",
      "Price": 12000
    },
    {
      "id": 2,
      "Type": "House",
      "Name": "Pearl Villa",
      "Price": 12000
    },
    {
      "id": 3,
      "Type": "Mansion",
      "Name": "Sky Top Villa",
      "Price": 12000
    },
    {
      "id": 4,
      "Type": "Tower",
      "Name": "RKV Towers",
      "Price": 12000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
