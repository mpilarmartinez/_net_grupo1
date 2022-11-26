import { Component, OnInit } from '@angular/core';

//añadir
import { Taskdepartment } from '../models/taskdepartment.model';
import { TaskdepartmentService } from '../services/taskdepartment.service';

@Component({
  selector: 'app-taskdepartment-list',
  templateUrl: './taskdepartment-list.component.html',
  styleUrls: ['./taskdepartment-list.component.css']
})
export class TaskdepartmentListComponent implements OnInit {
  /*taskdepartments: Taskdepartment[] = [
    { idDepartment: 1, nameDepartment: 'Angular' },
    { idDepartment: 2, nameDepartment: 'C Sharp' },
    { idDepartment: 3, nameDepartment: '.NET' },
  ];*/

  //añadir
  taskdepartments: Taskdepartment[] = [];
  //debe coincidir con json
  columnNames: string[] = ['idDepartment', 'nameDepartment', 'actions'];
  constructor(private service: TaskdepartmentService) { }

  ngOnInit(): void {
    //añadir el metodo a usar
    this.findAllTaskDepartment()
  }

  private findAllTaskDepartment() {
    //subscribe para ver los resultados
    this.service.findAllTaskDepartment().subscribe(
      {
        //se ejecuta si va bien
        next: taskdepatments => this.taskdepartments = taskdepatments,
        //se ejecuta si va mal
        error: err => console.log(err)
      }
    );
  }
  //funciona
  onDelete(idDepartment: number) {
    console.log(idDepartment);
    this.service.deleteByIdTaskdepartment(idDepartment).subscribe({
      next: response => this.findAllTaskDepartment(),
      error: err => console.log(err)
    });
  }
}
