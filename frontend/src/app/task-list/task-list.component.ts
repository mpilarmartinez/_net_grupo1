import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  // debe coincidir con json
  columnNames: string[] = ['idTask', 'nameTask', 'dateTask', 'statusTask', 'importanceTask'];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //añade método a usar
    this.findAll();
  }

  private findAll() {
    //subscribe para ver los resultados
    this.taskService.findAllTask().subscribe(
      {
        //si va bien se ejecuta
        next: tasks => this.tasks = tasks,
        //si va mal se ejecuta
        error: err => console.log(err)
      }
    );
  }

}

