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
//auto creado
import { TaskdepartmentListComponent } from './taskdepartment-list/taskdepartment-list.component';
import { TaskdepartmentDetailComponent } from './taskdepartment-detail/taskdepartment-detail.component';
//modulo router
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TaskdepartmentListComponent,
    TaskdepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //añadido
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    //router
    RouterModule.forRoot([
      //poner las rutas
      { path: '', redirectTo: 'bookstaskdepartments', pathMatch: 'full' }, //a la pag principal
      { path: 'taskdepartments', component: TaskdepartmentListComponent },
      { path: 'taskdepartments/:id/detail', component: TaskdepartmentDetailComponent }
      // ruta formulario taskdepartment

      // ruta editar taskdepartment


      //ruta de ...
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
