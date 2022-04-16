import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeeListComponent } from './employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListItemComponent } from './employee-list-item.component';
import { EmployeeFullNamePipe } from './employee-full-name.pipe';
@NgModule({
  declarations: [EmployeeListComponent, EmployeeListItemComponent, EmployeeFullNamePipe],
  imports: [CommonModule, MatListModule, MatDialogModule, HttpClientModule],
  exports: [EmployeeListComponent, EmployeeListItemComponent],
})
export class EmployeesModule {}

export interface Employee {
  id: number;

  imageUrl: string;

  firstName: string;

  lastName: string;

  email: string;

  contactNumber: number;

  age: number;

  dob: string;

  salary: number;

  address: string;
}

export const EMPLOYEE_API: string = 'https://hub.dummyapis.com/employee';