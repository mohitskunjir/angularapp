import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  title_inLowercase:string;
  title_inUppercase:string;
  today:any;
  jsonData:any;
  numbers = [];

  constructor() { 
    this.title_inLowercase = "this is pipe demo in lowercase";
    this.title_inUppercase = "THIS IS PIPE DEMO IN UPPERCASE";
    this.today = new Date();
    this.jsonData = 
    {
        name : 'John',
        age : 30,
        address :
        {
          tempAddr: 'Pune',
          permAddr: 'Delhi'
        }
    };
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit() {
  }

}
