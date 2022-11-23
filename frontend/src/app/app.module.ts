import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modulo boton de la libreria material
import { MatButtonModule } from '@angular/material/button';
//modulo tabla de la libreria material
import { MatTableModule } from '@angular/material/table';
//modulo icon de la libreria material
import { MatIconModule } from '@angular/material/icon';
//modulo select
import { MatSelectModule } from '@angular/material/select';
//modulo card
import { MatCardModule } from '@angular/material/card';
//modulo para detalles
import { MatDividerModule } from '@angular/material/divider';
//modulo para formulario
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



//modulo router
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//auto creado
import { TaskdepartmentListComponent } from './taskdepartment-list/taskdepartment-list.component';
import { TaskdepartmentDetailComponent } from './taskdepartment-detail/taskdepartment-detail.component';
import { TaskdepartmentFormComponent } from './taskdepartment-form/taskdepartment-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';
//import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskdepartmentListComponent,
    TaskdepartmentDetailComponent,
    TaskdepartmentFormComponent,
    ProjectListComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskFormComponent,
    ProjectFormComponent,
    //ProjectEditComponent,
    ProjectDetailComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //añadido
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,//aqui con angular llega a los controladores
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    //router
    RouterModule.forRoot([
      //poner las rutas
      { path: '', redirectTo: 'poner la principal', pathMatch: 'full' }, //a la pag principal

      { path: 'taskdepartments', component: TaskdepartmentListComponent },
      { path: 'taskdepartments/:id/detail', component: TaskdepartmentDetailComponent },//es para probar
      // ruta formulario taskdepartment
      { path: 'taskdepartments/new', component: TaskdepartmentFormComponent },
      // ruta editar taskdepartment
      { path: 'taskdepartments/:id/edit', component: TaskdepartmentDetailComponent }

      //ruta de ...
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
