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

  ngOnInit(): void {

  }

  createFormGroup() {
    return new FormGroup({
      IdProject: new FormControl({ value: null, disabled: true }),
      NameProject: new FormControl('', { nonNullable: true }),
      StatusProject: new FormControl('', { nonNullable: true }),
    });
  }

  save() {
    let project = {
      NameProject: this.editForm.get("NameProject")?.value,
      StatusProject: this.editForm.get("StatusProject")?.value,
    } as any;

    let id = this.editForm.get("IdProject")?.value;
    if (id) {
      project.IdProject = id;

      this.projectService.updateProject(project).subscribe({
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

