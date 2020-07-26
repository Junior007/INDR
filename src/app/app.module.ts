import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


// IMPORTAMOS COMPONENTES
import { NavComponent } from './components/nav/nav.component';

// IMPORTAMOS SERVICIOS
import { ParamsService } from './services/params/params.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    ParamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
