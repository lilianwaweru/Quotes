import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
quotes = [
  new Quotes(1, `here i am`),
  new Quotes(2, 'where are you'),
  new Quotes(3, 'yes am here')
]
}
