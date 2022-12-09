import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { TaskdepartmentService } from '../services/taskdepartment.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  // debe coincidir con json
  columnNames: string[] = ['id', 'name', 'date', 'status', 'importance', 'project', 'user', 'taskdepartment', 'actions'];

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

  onDelete(id: number) {
    console.log(id);
    this.taskService.deleteByIdTask(id).subscribe({
      next: response => this.findAllTask(),
      error: err => console.log(err)
    });
  }

}

