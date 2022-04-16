import { Employee, EMPLOYEE_API } from './employees.module';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2 class="text-blue-700">My Employees</h2>

    <mat-list>
      <ng-container *ngFor="let item of employees | async">
        <mat-list-item class="hover:bg-gray-100">
          <app-employee-list-item [employee]="item"></app-employee-list-item>
        </mat-list-item>
        <mat-divider></mat-divider>
      </ng-container>
    </mat-list>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]> | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.employees = this.getEmployees();
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(EMPLOYEE_API);
  }
}
