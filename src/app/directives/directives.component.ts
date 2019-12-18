import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  numbers = [];
  index:any;
  constructor() {
      this.index = 10;
      this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   }

  ngOnInit() {
  }

  
}
