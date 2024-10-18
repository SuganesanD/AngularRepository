import { Component } from '@angular/core';
import { subscriptionClass } from '../services/subscription.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[subscriptionClass]
})
export class SearchComponent {
searchValue:string=''
search:string[]=[]
constructor(private searchval:subscriptionClass){
  this.search=searchval.courses
}
}
