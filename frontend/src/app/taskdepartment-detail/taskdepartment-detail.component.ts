import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/department.model';
import { TaskdepartmentService } from '../services/taskdepartment.service';

@Component({
  selector: 'app-taskdepartment-detail',
  templateUrl: './taskdepartment-detail.component.html',
  styleUrls: ['./taskdepartment-detail.component.css']
})
export class TaskdepartmentDetailComponent implements OnInit {

  taskdepartment: Department | undefined;

  constructor(
    private taskdepartmentService: TaskdepartmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        this.fetchTaskdepartment(id);
      },
      error: err => console.log(err)
    });
  }

  fetchTaskdepartment(id: string | null) {
    this.taskdepartmentService.findByIdDepartment(Number(id)).subscribe({
      next: taskdepartmentBackend => this.taskdepartment = taskdepartmentBackend,
      error: err => console.log(err)
    });
  }

  onDelete(id: number) {
    console.log(id);
    this.taskdepartmentService.deleteByIdDepartment(id).subscribe({
      next: response => this.navigateToList(),
      error: err => console.log(err)
    });
  }
  //Despues de eliminar vuelve a la lista
  private navigateToList() {
    this.router.navigate(["/departments"]);
  }

}
