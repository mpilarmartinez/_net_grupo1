import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];
  // debe coincidir con json
  // para que aparezca la columna tareas
  columnNames: string[] = ['id', 'name', 'status','tasks', 'actions'];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    //añade método a usar
    this.findAllProject();
  }

  private findAllProject() {
    //subscribe para ver los resultados
    this.projectService.findAllProject().subscribe(
      {
        //si va bien se ejecuta
        next: projects => this.projects = projects,
        //si va mal se ejecuta
        error: err => console.log(err)
      }
    );
  }

  onDelete(id: number) {
    console.log(id);
    this.projectService.deleteByIdProject(id).subscribe({
      next: response => this.findAllProject(),
      error: err => console.log(err)
    });
  }

}

