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

//auto creado
import { TaskdepartmentListComponent } from './taskdepartment-list/taskdepartment-list.component';
import { TaskdepartmentDetailComponent } from './taskdepartment-detail/taskdepartment-detail.component';
//modulo router
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,//aqui con angular llega a los controladores
    MatSelectModule,
    MatCardModule,
    //router
    RouterModule.forRoot([
      //poner las rutas
      { path: '', redirectTo: 'poner la principal', pathMatch: 'full' }, //a la pag principal

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
