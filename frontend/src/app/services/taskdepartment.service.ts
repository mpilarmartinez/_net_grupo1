import { Injectable } from '@angular/core';

// añadir

//permite conectarnos al backend
import { HttpClient } from '@angular/common/http';
//debe coincidir con el modelo
import { Department } from '../models/department.model';


@Injectable({
  providedIn: 'root'
})
export class TaskdepartmentService {

  //ir al swagger y ejecutar mostrar la lista y copiar la url
  url = 'https://localhost:7076/api/departments';

  constructor(private http: HttpClient) { }
  //añadir metodos a utilizar
  createDepartment(department: Department) {
    return this.http.post<Department>(this.url, department);
  }

  updateDepartment(department: Department) {
    return this.http.put<Department>(this.url, department);
  }
  //con [] nos devuelve una lista
  findAllDepartment() {
    return this.http.get<Department[]>(this.url);
  }

  findByIdDepartment(id: number) {
    return this.http.get<Department>(`${this.url}/${id}`);
  }

  deleteByIdDepartment(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
