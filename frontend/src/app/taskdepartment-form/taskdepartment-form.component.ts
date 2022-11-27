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
  //idDepartment y nameDepartment es igual al json
  createFormGroupDepartment() {
    return new FormGroup({
      idDepartment: new FormControl({ value: null, disabled: true }),
      nameDepartment: new FormControl()
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

  private getTaskdepartmentAndLoadInForm(idDepartment: string) {
    this.taskdepartmentService.findByIdTaskDepartment(Number(idDepartment)).subscribe(
      {
        next: taskdeparmentFromBackend => {

          this.editForm.reset(
            {
              idDepartment: { value: taskdeparmentFromBackend.idDepartment, disabled: true },
              name: taskdeparmentFromBackend.nameDepartment

            } as any);

        },
        error: err => console.log(err)
      }
    );
  }

  save() {

    //nameDepartment igual al json
    let taskdepartment = {
      nameDepartment: this.editForm.get("nameDepartment")?.value
    } as any;

    //ideDepartment igual al json
    let idDepartment = this.editForm.get("idDepartment")?.value;
    if (idDepartment) { // actualización
      taskdepartment.idDepartment = idDepartment;

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
  //Despues de guardar se vuelve a la lista
  private navigateToList() {
    this.router.navigate(["/taskdepartments"]);
  }
}
