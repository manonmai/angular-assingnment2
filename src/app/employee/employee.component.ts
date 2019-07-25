import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public id: number = 0;
  public name = "";
  public salary: number = 0;
  public department= "";

  employee = [
    {
      id: 100, name: 'Seeta', salary: 380000, department: "hr"
    }
  ]

  constructor() { }
  display() {
    alert(this.name + " " + this.id + " " + this.salary + " "+this.department);
  }
  ngOnInit() {
  }
  addDetails() {
    this.employee.push(
      {
        id: this.id,
        name: this.name,
        salary: this.salary,
        department: this.department
      }
    )
  }
  delete(data) {
    let index: number = this.employee.indexOf(data);
    this.employee.splice(index, 1);
  }
  
  // onUpdate(emp1) {
  //   this.displayupdate = true;

  // }
  update(data) {
    let ind : number = this.employee.indexOf(data);
    this.employee.splice(ind, 1);
    this.employee.push({ id: this.id, name: this.name, salary: this.salary, department: this.department });
  }

}






