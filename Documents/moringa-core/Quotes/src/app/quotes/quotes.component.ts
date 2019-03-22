import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1, 'here i am', 'Author:njuguna', 'Publisher:her'),
    new Quotes(2, 'where are you', 'Author:muthoni', 'Publisher:his'),
    new Quotes(3, 'yes am here', 'Author:waweru', 'Publisher:his'),
  ]

  quoteComplete(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
