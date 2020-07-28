import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { EnvironmentService } from 'src/app/services/environment/environment.service';



@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private env: EnvironmentService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = this.env.authToken();

  if (token) {
      const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token)
      });

      return next.handle(cloned);
  } else {
      return next.handle(req);
  }
}
}
//
// Ésta clase se inyecta en el app.module.ts module
export const SecurityInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: SecurityInterceptor,
  multi: true
};