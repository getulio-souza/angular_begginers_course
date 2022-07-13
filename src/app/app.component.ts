import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '14';
  data = "hello code"
  getVal() {
   return "code step by step"
  }
  num=101
}
