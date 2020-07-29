import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// INTERCEPTORES
import { UrlInterceptorProvider } from './interceptors/url/url.interceptor';
import { SecurityInterceptorProvider } from './interceptors/security/security.interceptor';


// COMPONENTES NGX-BOOTSTRAP
import { ModalModule} from 'ngx-bootstrap/modal';

// IMPORTAMOS COMPONENTES
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { ParamComponent } from './components/param/param.component';
import { DeleteMessageComponent } from './components/deleteMessage/deleteMessage.component';

// IMPORTAMOS SERVICIOS
import { EnvironmentService } from 'src/app/services/environment/environment.service';
import { ParamsService } from './services/params/params.service';
import { AuthService } from './services/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // MIS COMPONENTES
    AppComponent,
    NavComponent,
    LoginComponent,
    ParamComponent,
    DeleteMessageComponent
  ],
  imports: [
    // NGX BOOTSTRAP
    ModalModule.forRoot(),
    //  
    // RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    // MIS SERVICIOS
    EnvironmentService, // para mantener variables de entorno que me puedan ser necesarias
    ParamsService,
    AuthService,
    UrlInterceptorProvider,
    SecurityInterceptorProvider,
    // ErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
