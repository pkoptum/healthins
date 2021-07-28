
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/data/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];


  constructor(private http: HttpClient, private housingService: HousingService) { }

  ngOnInit(): void {
    // this.housingService.getHttpProperties().subscribe(resp => console.log(resp))

    this.housingService.getProperties().subscribe(
      properties=>this.properties=properties
    );
  }

}
