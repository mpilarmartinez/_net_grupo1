import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskImportance'
})
export class TaskImportancePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 0:
        return "BAJA";
      case 1:
        return "MEDIA";
      case 2:
        return "ALTA";
      default:
        return "Unknown";
    }
  }
}
