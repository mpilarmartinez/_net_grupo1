import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  editForm = this.createFormGroup();
  error: boolean = false;

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }


  createFormGroup() {
    return new FormGroup({
      idTask: new FormControl({ value: null, disabled: true }),
      nameTask: new FormControl('', { nonNullable: true }),
      dateTask: new FormControl('', { nonNullable: true }),
      statusTask: new FormControl('', { nonNullable: true }),
      importanceTask: new FormControl('', { nonNullable: true }),
    });
  }

  save() {
    let task = {
      nameTask: this.editForm.get("nameTask")?.value,
      dateTask: this.editForm.get("dateTask")?.value,
      statusTask: this.editForm.get("statusTask")?.value,
      importanceTask: this.editForm.get("importanceTask")?.value,
    } as any;

    let id = this.editForm.get("id")?.value;
    if (id) {
      task.idTask = id;

      this.taskService.updateTask(task).subscribe({
        next: response => this.navigateToList(),
        error: err => this.showError(err)
      });
    }
  }

  private showError(err: any): void {
    console.log(err);
    this.error = true;
  }

  private navigateToList() {
    this.router.navigate(["/sers"]);
  }
}
