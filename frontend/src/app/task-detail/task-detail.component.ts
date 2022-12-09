import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { TaskdepartmentService } from '../services/taskdepartment.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task | undefined;

  constructor(private taskService: TaskService, private projectService: ProjectService, private userService: UserService, private taskdepartmentService: TaskdepartmentService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        this.fetchUser(id);
      },
      error: err => console.log(err)
    });
  }
  fetchUser(id: string | null) {
    this.taskService.findByIdTask(Number(id)).subscribe({
      next: taskBackend => this.task = taskBackend,
      error: err => console.log(err)
    });
  }

  onDelete(id: number) {
    console.log(id);
    this.taskService.deleteByIdTask(id).subscribe({
      next: response => this.navigateToList(),
      error: err => console.log(err)
    });
  }

  private navigateToList() {
    this.router.navigate(["/tasks"]);
  }
}
