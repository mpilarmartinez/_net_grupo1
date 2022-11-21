import { Component, OnInit } from '@angular/core';
//añadir
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdepartmentService } from '../services/taskdepartment.service';

@Component({
  selector: 'app-taskdepartment-form',
  templateUrl: './taskdepartment-form.component.html',
  styleUrls: ['./taskdepartment-form.component.css']
})
export class TaskdepartmentFormComponent implements OnInit {

  editForm = this.createFormGroupDepartment(); // formulario
  error: boolean = false;

  constructor(private taskdepartmentService: TaskdepartmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  createFormGroupDepartment() {
    return new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      name: new FormControl()
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        if (id) {
          this.getTaskdepartmentAndLoadInForm(id);
        }
      }
    });
  }

  private getTaskdepartmentAndLoadInForm(id: string) {
    this.taskdepartmentService.findByIdTaskDepartment(Number(id)).subscribe(
      {
        next: taskdeparmentFromBackend => {

          this.editForm.reset(
            {
              id: { value: taskdeparmentFromBackend.idDepartment, disabled: true },
              name: taskdeparmentFromBackend.nameDepartment

            } as any);

        },
        error: err => console.log(err)
      }
    );
  }

  save() {


    let taskdepartment = {
      name: this.editForm.get("name")?.value
    } as any;


    let id = this.editForm.get("id")?.value;
    if (id) { // actualización
      taskdepartment.id = id;

      this.taskdepartmentService.updateTaskDepartment(taskdepartment).subscribe({
        next: response => this.navigateToList(),
        error: err => this.showError(err)
      });

    } else { // creación
      this.taskdepartmentService.createTaskDepartment(taskdepartment).subscribe({
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
    this.router.navigate(["/tasdepartments"]);
  }


}
