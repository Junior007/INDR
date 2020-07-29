import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// NGX-BOOTSTRAP
import { PaginationModule } from 'ngx-bootstrap/pagination';

// COMPONENTES
import { HomeComponent } from './components/home/home.component';
import { ParamsComponent } from './components/params/params.component';

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

  declarations: [     HomeComponent, ParamsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), PaginationModule.forRoot()],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
