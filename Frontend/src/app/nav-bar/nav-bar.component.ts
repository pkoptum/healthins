import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Policy } from 'src/data/policy';
import { GetPoliciesService } from '../services/get-policies.service';
import { PolicyReceive } from '../model/policy';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  heroes$ !: Observable<PolicyReceive[]>
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
    if(localStorage.getItem('userType')){
      // console.log('logged in printin usertype',localStorage.getItem('userType'));
    return true;
    }else {
      return null;
    }
  }

  onLogout()
  {
    localStorage.removeItem('userType');
    //
    //
    // localStorage.clear()      //enable after testing -> it clears the storage to keep app presistent 
    //
    //
  }

  isPayer()
  {
    if(localStorage.getItem('userType')=='Payer')
    {
      
      return localStorage.getItem('userType');
      
    }
    else{
      return null;
    }
  }
  isCoust()
  {
    if(localStorage.getItem('userType')=="Customer")
    {
      return true;
    }
    else{
      return false;
    }
  }

}
