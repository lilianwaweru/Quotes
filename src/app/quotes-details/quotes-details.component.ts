import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Quotes} from '../quotes'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isComplete= new EventEmitter<boolean>();
  @Output() upVote = new EventEmitter<boolean>();
  @Output() downVote = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  thumbsUp(voting:boolean){
    this.upVote.emit(voting);
  }
  thumbsDown(voting1:boolean){
    this.downVote.emit(voting1);
  }
  constructor() { }

  ngOnInit() {
  }

}
