import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <h3 class="custom">
      country works!
    </h3>
  `,
  styles: [
    `.custom{
      color:blue
    }`
  ]
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
