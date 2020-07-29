import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// NGX-BOOTSTRAP
import { PaginationModule } from 'ngx-bootstrap/pagination';

// COMPONENTES DE LA NAVEGACIÓN
import { HomeComponent } from './components/home/home.component';
import { ParamsComponent } from './components/params/params.component';


// OTROS QUE SE USAN EN EL MÓDULO DE ROUTING
import { ParamComponent } from './components/param/param.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'params',
    component: ParamsComponent,
    pathMatch: 'full'
  }
];

@NgModule({

  declarations: [     HomeComponent, ParamsComponent, ParamComponent, DeleteComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), PaginationModule.forRoot()],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
