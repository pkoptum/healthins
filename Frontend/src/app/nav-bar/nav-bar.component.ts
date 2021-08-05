import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from '../services/get-policies.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  heroes$ !: Observable<Policy[]>
  private searchTerms = new Subject<string>();

  search(term: string): void{
    console.log(this.searchTerms)
    this.searchTerms.next(term);
    
  }

  constructor(private searchService: GetPoliciesService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) =>
        this.searchService.searchPolicy(term)
      )
    )
  }

  loggedin()
  {
    return localStorage.getItem('token');
  }

  onLogout()
  {
    localStorage.removeItem('token');
  }

}
