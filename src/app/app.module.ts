import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


// IMPORTAMOS COMPONENTES
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { ParamComponent } from './components/param/param.component';
import { DeleteMessageComponent } from './components/deleteMessage/deleteMessage.component';

// IMPORTAMOS SERVICIOS
import { ParamsService } from './services/params/params.service';
import { LoginService } from './services/login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ParamComponent,
    DeleteMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ParamsService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
