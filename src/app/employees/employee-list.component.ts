import { Employee, EMPLOYEE_API } from './employees.module';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  template: `
    <mat-card class="px-0 rounded-lg mat-elevation-z3">
      <mat-card-title class="px-4">
        <h2 class="text-blue-700">My Employees</h2>
      </mat-card-title>
      <mat-card-content>
        <mat-list>
          <ng-container *ngFor="let item of employees | async; last as isLast">
            <mat-list-item class="hover:bg-gray-100 cursor-pointer">
              <app-employee-list-item
                [employee]="item"
              ></app-employee-list-item>
            </mat-list-item>
            <mat-divider *ngIf="!isLast"></mat-divider>
          </ng-container>
        </mat-list>
      </mat-card-content>
    </mat-card>
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
  employees: Observable<Employee[]> = of([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.employees = this.getEmployees();
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(EMPLOYEE_API);
  }
}
