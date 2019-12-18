import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

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
  loginFlag:boolean;
  showPwd:boolean;

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor() {
    this.flag = true;
    this.showPwd = true;
    this.loginFlag = false;
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
  showPassword()
  {
      this.showPwd = !this.showPwd;
  }

  checkUser(){
    if(this.pwd == this.pwd2) {
      alert("Hello " + this.uname);
      this.loginFlag = true;
    }
    else {
      alert("Invalid Credentials");
      this.loginFlag = false;
    }
  }
}
