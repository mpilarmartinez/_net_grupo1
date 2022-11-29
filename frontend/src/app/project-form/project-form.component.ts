import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  editForm = this.createFormGroup();
  error: boolean = false;

  constructor(private projectService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute) { }

  createFormGroup() {
    return new FormGroup({
      idProject: new FormControl({ value: null, disabled: true }),
      nameProject: new FormControl('', { nonNullable: true }),
      statusProject: new FormControl('', { nonNullable: true }),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        if (id) {
          this.getProjectAndLoadInForm(id);
        }
      }
    });
  }

  private getProjectAndLoadInForm(idProject: string) {
    this.projectService.findByIdProject(Number(idProject)).subscribe(
      {
        next: projectFromBackend => {

          this.editForm.reset(
            {
              idProject: { value: projectFromBackend.idProject, disabled: true },
              nameProject: projectFromBackend.nameProject,
              statusProject: projectFromBackend.statusProject

            } as any);

        },
        error: err => console.log(err)
      }
    );
  }

  save() {
    let project = {
      nameProject: this.editForm.get("nameProject")?.value,
      statusProject: this.editForm.get("statusProject")?.value,
    } as any;

    let idProject = this.editForm.get("idProject")?.value;
    if (idProject) {// actualización
      project.idProject = idProject;

      this.projectService.updateProject(project).subscribe({
        next: response => this.navigateToList(),
        error: err => this.showError(err)
      });
    } else { // creación
      this.projectService.createProject(project).subscribe({
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
    this.router.navigate(["/projects"]);
  }
}

