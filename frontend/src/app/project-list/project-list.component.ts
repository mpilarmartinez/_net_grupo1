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
  columnNames: string[] = ['idProject', 'nameProject', 'statusProject', 'actions'];

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

  onDelete(idProject: number) {
    console.log(idProject);
    this.projectService.deleteByIdProject(idProject).subscribe({
      next: response => this.findAllProject(),
      error: err => console.log(err)
    });
  }

}

