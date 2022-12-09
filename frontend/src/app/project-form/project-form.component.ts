import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { TaskService } from '../services/task.service';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {
  project: Project | undefined;
  editForm = this.createFormGroup();
  error: boolean = false;
  tasks: Task[] = [];

  constructor(private projectService: ProjectService, private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) { }

  createFormGroup() {
    return new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      name: new FormControl('', { nonNullable: true }),
      status: new FormControl('', { nonNullable: true }),
      tasks: new FormControl()
    });
  }


  ngOnInit(): void {
    // Extraer id de la url
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");

        if (id) {
          this.getProjectAndLoadInForm(id);
          this.fetchProject(id);
        }
      }
    });
    // cargar tareas
    this.taskService.findAllTask().subscribe({
      next: tasks => this.tasks = tasks,
      error: err => console.log(err)
    });

  }

  fetchProject(id: string | null) {
    this.projectService.findByIdProject(Number(id)).subscribe({
      next: projectBackend => this.project = projectBackend,
      error: err => console.log(err)
    });
  }

  private getProjectAndLoadInForm(id: string) {
    this.projectService.findByIdProject(Number(id)).subscribe(
      {
        next: projectFromBackend => {

          this.editForm.reset(
            {
              id: { value: projectFromBackend.id, disabled: true },
              name: projectFromBackend.name,
              status: projectFromBackend.status,
              task: projectFromBackend.tasks       // asociación tareas

            } as any);

        },
        error: err => console.log(err)
      }
    );
  }

  save() {
    let project = {
      name: this.editForm.get("name")?.value,
      status: this.editForm.get("status")?.value,
      tasks: this.editForm.get("tasks")?.value,    //asociación tarea
    } as any;

    let id = this.editForm.get("id")?.value;
    if (id) {// actualización
      project.id = id;

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

