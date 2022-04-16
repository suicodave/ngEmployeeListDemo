import { Employee } from './employees.module';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFullName',
})
export class EmployeeFullNamePipe implements PipeTransform {
  transform(value: Employee, ...args: unknown[]): unknown {
    return `${value.firstName} ${value.lastName}`;
  }
}
