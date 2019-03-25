import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1, 'The grass is greener where you water it', 'Author:Neil Barrigham', 'Publisher:lilian', new Date(2019,3,22),0,0),
    new Quotes(2, 'It always seems impossible until it done', 'Author:Nelson Mandela', 'Publisher:lilian', new Date(2019,3,22),0,0),
    new Quotes(3, 'Education is the most powerful weapon which you can use to change the world', 'Author:Nelson Mandela', 'Publisher:his', new Date(2019,3,22),0,0),
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
  thumbsUp(upvote,index){
    if(upvote){
      this.quotes[index].upVote +=1;
    }
  }

  thumbsDown(downvoting,index){
    if(downvoting){
      this.quotes[index].downVote -=1;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
