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
  columnNames: string[] = ['idTask', 'nameTask', 'dateTask', 'statusTask', 'importanceTask', 'actions'];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //añade método a usar
    this.findAllTask();
  }

  private findAllTask() {
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

  onDelete(idTask: number) {
    console.log(idTask);
    this.taskService.deleteByIdTask(idTask).subscribe({
      next: response => this.findAllTask(),
      error: err => console.log(err)
    });
  }



}

