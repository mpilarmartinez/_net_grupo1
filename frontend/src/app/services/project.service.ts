import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //conectar al backend
import { Project } from '../models/project.model';  //coincide con el modelo Project

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'https://localhost:7076/api/projects'; //ir a swagger,ejecutar mostrar lista y copiar url

  constructor(private http: HttpClient) { }
  //metodos a utilizar
  createProject(project: Project) {
    return this.http.post<Project>(this.url, project);
  }

  updateProject(project: Project) {
    return this.http.put<Project>(this.url, project);
  }

  findAllProject() {
    return this.http.get<Project[]>(this.url); //[] devuelve una lista
  }

  findByIdProject(id: number) {
    return this.http.get<Project>(`${this.url}/${id}`);
  }

  deleteByIdProject(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
