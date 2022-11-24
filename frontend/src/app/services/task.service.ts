import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //conectar al backend
import { Task } from '../models/task.model';        //coincide con el modelo Task

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'https://localhost:7076/api/tasks'; //ir a swagger,ejecutar mostrar lista y copiar url

  constructor(private http: HttpClient) { }
  //metodos a utilizar
  createTask(task: Task) {
    return this.http.post<Task>(this.url, task);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(this.url, task);
  }
  
  findAllTask() {
    return this.http.get<Task[]>(this.url); //[] devuelve una lista
  }

  findByIdTask(id: number) {
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  deleteByIdTask(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
