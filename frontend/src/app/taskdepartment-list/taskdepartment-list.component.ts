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
  //añadir
  taskdepatments: Taskdepartment[] = [];

  columnNames: string[] = ['IdDepartment', 'NameDepartment'];
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
        next: taskdepatments => this.taskdepatments = taskdepatments,
        //se ejecuta si va mal
        error: err => console.log(err)
      }
    );
  }

}
