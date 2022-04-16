import { Employee } from './employees.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list-item',
  template: `
    {{employee | employeeFullName}}
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EmployeeListItemComponent implements OnInit {
  @Input() employee!: Employee;

  constructor() {}

  ngOnInit(): void {}
}
