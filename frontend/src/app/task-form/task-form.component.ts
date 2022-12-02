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

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  createFormGroup() {
    return new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      name: new FormControl('', { nonNullable: true }),
      date: new FormControl('', { nonNullable: true }),
      status: new FormControl('', { nonNullable: true }),
      importance: new FormControl('', { nonNullable: true })
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        if (id) {
          this.getTaskAndLoadInForm(id);
        }
      }
    });
  }

  private getTaskAndLoadInForm(id: string) {
    this.taskService.findByIdTask(Number(id)).subscribe(
      {
        next: taskFromBackend => {

          this.editForm.reset(
            {
              id: { value: taskFromBackend.id, disabled: true },
              name: taskFromBackend.name,
              date: taskFromBackend.date,
              status: taskFromBackend.status,
              importance: taskFromBackend.importance

            } as any);

        },
        error: err => console.log(err)
      }
    );
  }

  save() {
    let task = {
      name: this.editForm.get("name")?.value,
      date: this.editForm.get("date")?.value,
      status: this.editForm.get("status")?.value,
      importance: this.editForm.get("importance")?.value,
    } as any;

    //ideDepartment igual al json
    let id = this.editForm.get("id")?.value;
    if (id) {// actualizacion
      task.id = id;

      this.taskService.updateTask(task).subscribe({
        next: response => this.navigateToList(),
        error: err => this.showError(err)
      });
    } else { // creación
      this.taskService.createTask(task).subscribe({
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
    this.router.navigate(["/tasks"]);
  }
}
