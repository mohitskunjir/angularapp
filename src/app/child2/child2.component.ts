import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() public childEvent: any;
  msg: string;

  constructor() {
    this.msg = "Message From Child Component";
    this.childEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  call() {
    this.childEvent.emit(this.msg);
  }
}
