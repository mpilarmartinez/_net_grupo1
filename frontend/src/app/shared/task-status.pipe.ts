import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 0:
        return "SIN_COMENZAR";
      case 1:
        return "EN_PROCESO";
      case 2:
        return "FINALIZADA";
      default:
        return "Unknown";
    }
  }

}
