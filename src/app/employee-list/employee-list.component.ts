import { Component, OnInit } from '@angular/core';
import { SendEmployeeDataService } from '../send-employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList = [];

  constructor(private empService : SendEmployeeDataService) { 
    this.employeeList = empService.getEmployees();
  }

  ngOnInit() {
  }

}
