import { Component, OnInit } from '@angular/core';

//añadir
import { Department } from '../models/department.model';
import { TaskdepartmentService } from '../services/taskdepartment.service';

@Component({
  selector: 'app-taskdepartment-list',
  templateUrl: './taskdepartment-list.component.html',
  styleUrls: ['./taskdepartment-list.component.css']
})
export class TaskdepartmentListComponent implements OnInit {
  /*taskdepartments: Taskdepartment[] = [
    { idDepartment: 1, nameDepartment: 'Angular' },
    { idDepartment: 2, nameDepartment: 'C Sharp' },
    { idDepartment: 3, nameDepartment: '.NET' },
  ];*/

  //añadir
  departments: Department[] = [];
  //debe coincidir con json
  columnNames: string[] = ['id', 'name', 'actions'];
  constructor(private service: TaskdepartmentService) { }

  ngOnInit(): void {
    //añadir el metodo a usar
    this.findAllDepartment()
  }

  private findAllDepartment() {
    //subscribe para ver los resultados
    this.service.findAllDepartment().subscribe(
      {
        //se ejecuta si va bien
        next: departments => this.departments = departments,
        //se ejecuta si va mal
        error: err => console.log(err)
      }
    );
  }
  //funciona
  onDelete(id: number) {
    console.log(id);
    this.service.deleteByIdDepartment(id).subscribe({
      next: response => this.findAllDepartment(),
      error: err => console.log(err)
    });
  }
}
