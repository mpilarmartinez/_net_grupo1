import { Injectable } from '@angular/core';

// añadir

//permite conectarnos al backend
import { HttpClient } from '@angular/common/http';
//debe coincidir con el modelo
import { Taskdepartment } from '../models/taskdepartment.model';


@Injectable({
  providedIn: 'root'
})
export class TaskdepartmentService {

  //ir al swagger y ejecutar mostrar la lista y copiar la url
  url = 'https://localhost:7076/api/taskDepartments';

  constructor(private http: HttpClient) { }
  //añadir metodos a utilizar
  createTaskDepartment(taskdepartment: Taskdepartment) {
    return this.http.post<Taskdepartment>(this.url, taskdepartment);
  }

  updateTaskDepartment(taskdepartment: Taskdepartment) {
    return this.http.put<Taskdepartment>(this.url, taskdepartment);
  }
  //con [] nos devuelve una lista
  findAllTaskDepartment() {
    return this.http.get<Taskdepartment[]>(this.url);
  }

  findByIdTaskDepartment(id: number) {
    return this.http.get<Taskdepartment>(`${this.url}/${id}`);
  }

  deleteByIdTaskdepartment(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
