import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modulos de angular-material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

//modulo router
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//Componentes creados
import { TaskdepartmentListComponent } from './taskdepartment-list/taskdepartment-list.component';
import { TaskdepartmentDetailComponent } from './taskdepartment-detail/taskdepartment-detail.component';
import { TaskdepartmentFormComponent } from './taskdepartment-form/taskdepartment-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

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
    ProjectDetailComponent,
    UserFormComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    //router
    RouterModule.forRoot([
      //HOME
      { path: '', redirectTo: 'poner la principal', pathMatch: 'full' }, 
      //Task Department
      { path: 'taskdepartments', component: TaskdepartmentListComponent },
      { path: 'taskdepartments/:id/detail', component: TaskdepartmentDetailComponent },
      { path: 'taskdepartments/new', component: TaskdepartmentFormComponent },
      { path: 'taskdepartments/:id/edit', component: TaskdepartmentDetailComponent },
      //User
      { path: 'users', component: UserListComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'users/:id/edit', component: UserFormComponent },
      //Task
      { path: 'tasks', component: TaskListComponent },
      { path: 'tasks/:id/detail', component: TaskDetailComponent },
      { path: 'tasks/new', component: TaskFormComponent },
      { path: 'tasks/:id/edit', component: TaskFormComponent },
      //Project
      { path: 'projects', component: ProjectListComponent },
      { path: 'projects/:id/detail', component: ProjectDetailComponent },
      { path: 'projects/new', component: ProjectFormComponent },
      { path: 'projects/:id/edit', component: ProjectFormComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
