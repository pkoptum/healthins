import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from 'src/data/policy';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() policies!: Observable<Policy[]>

  constructor() { }

  ngOnInit(): void {
  }

}
