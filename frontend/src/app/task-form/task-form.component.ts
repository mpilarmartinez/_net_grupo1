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
      IdTask: new FormControl({ value: null, disabled: true }),
      NameTask: new FormControl('', { nonNullable: true }),
      DateTask: new FormControl('', { nonNullable: true }),
      StatusTask: new FormControl('', { nonNullable: true }),
      ImportanceTask: new FormControl('', { nonNullable: true }),
    });
  }

  save() {
    let task = {
      NameTask: this.editForm.get("NameTask")?.value,
      DateTask: this.editForm.get("DateTask")?.value,
      StatusTask: this.editForm.get("StatusTask")?.value,
      ImportanceTask: this.editForm.get("ImportanceTask")?.value,
    } as any;

    let id = this.editForm.get("id")?.value;
    if (id) {
      task.IdTask = id;

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
