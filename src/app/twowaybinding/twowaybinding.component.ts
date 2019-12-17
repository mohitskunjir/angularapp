import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  uname:string;
  pwd:string;
  pwd2:string;
  flag:boolean;

  constructor() {
    this.flag = true;
    this.uname = "";
    this.pwd = "";
    this.pwd2 = "qwerty";
  }

  ngOnInit() {
  };

  enableLogin() {
    if(this.uname.length > 0 && this.pwd.length > 0)
    {
      this.flag = false
    }
  }

  checkUser(){
    if(this.pwd == this.pwd2) {
      alert("Hello " + this.uname);
    }
    else {
      alert("Invalid Credentials");
    }
  }
}
