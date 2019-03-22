import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1, `here i am`),
    new Quotes(2, 'where are you'),
    new Quotes(3, 'yes am here')
  ]
  constructor() { }

  ngOnInit() {
  }

}
