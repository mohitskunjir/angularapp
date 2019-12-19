import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() usernameFromParent:string;
  @Input() ageFromParent:number;
  @Input() userDataFromParent:any;
  numbers =[];
  constructor() {  
    this.numbers = [0, 1, 2];
  }

  ngOnInit() {
  }



}
