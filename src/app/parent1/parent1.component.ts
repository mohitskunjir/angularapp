import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  username:string;
  age:number;
  userData:any;

  constructor() { 
    this.username = "Mohit";
    this.age = 23;
    this.userData =
    [
      {
        tempAddr:"Pune",
        permAddr:"Delhi"
      }
    ];
  }

  ngOnInit() {
  }

}
