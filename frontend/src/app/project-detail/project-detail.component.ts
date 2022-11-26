import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project | undefined;

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        this.fetchUser(id);
      },
      error: err => console.log(err)
    });
  }
  fetchUser(id: string | null) {
    this.projectService.findByIdProject(Number(id)).subscribe({
      next: projectBackend => this.project = projectBackend,
      error: err => console.log(err)
    });
  }

  onDelete(id: number) {
    console.log(id);
    this.projectService.deleteByIdProject(id).subscribe({
      next: response => this.navigateToList(),
      error: err => console.log(err)
    });
  }

  private navigateToList() {
    this.router.navigate(["/projects"]);
  }
}
