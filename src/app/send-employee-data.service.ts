import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmployeeDataService {

  employees:any;

  constructor() { 
    this.employees = 
    [
       { id: "1", name:"Mohit", age:23},
       { id: "2", name:"Sanket", age:21},
       { id: "3", name:"Rajesh", age:33},
       { id: "4", name:"Suresh", age:43},
       { id: "5", name:"Mahesh", age:53},
    ];
  }

  getEmployees():any{
    return this.employees;
  }
}
