import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PolicyReceive } from 'src/app/model/policy';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() policies!: Observable<PolicyReceive[]>

  constructor() { }

  ngOnInit(): void {
  }

}
