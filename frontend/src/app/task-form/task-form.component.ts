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
      idTask: new FormControl({ value: null, disabled: true }),
      nameTask: new FormControl('', { nonNullable: true }),
      dateTask: new FormControl('', { nonNullable: true }),
      statusTask: new FormControl('', { nonNullable: true }),
      importanceTask: new FormControl('', { nonNullable: true })
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

  private getTaskAndLoadInForm(idTask: string) {
    this.taskService.findByIdTask(Number(idTask)).subscribe(
      {
        next: taskFromBackend => {

          this.editForm.reset(
            {
              idTask: { value: taskFromBackend.idTask, disabled: true },
              nameTask: taskFromBackend.nameTask,
              dateTask: taskFromBackend.dateTask,
              statusTask: taskFromBackend.statusTask,
              importanceTask: taskFromBackend.importanceTask

            } as any);

        },
        error: err => console.log(err)
      }
    );
  }

  save() {
    let task = {
      nameTask: this.editForm.get("nameTask")?.value,
      dateTask: this.editForm.get("dateTask")?.value,
      statusTask: this.editForm.get("statusTask")?.value,
      importanceTask: this.editForm.get("importanceTask")?.value,
    } as any;

    //ideDepartment igual al json
    let idTask = this.editForm.get("idTask")?.value;
    if (idTask) {// actualizacion
      task.idTask = idTask;

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
