import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1, 'here i am', 'Author:njuguna', 'Publisher:her', new Date(2019,3,22)),
    new Quotes(2, 'where are you', 'Author:muthoni', 'Publisher:his', new Date(2019,3,22)),
    new Quotes(3, 'yes am here', 'Author:waweru', 'Publisher:his', new Date(2019,3,22)),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].text}`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

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
