import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(
                error => {
                    if (error instanceof HttpErrorResponse) {
                        const applicationError = error.headers.get('Application-Error');
                        if (applicationError) {
                            return throwError(error.headers.get('Application-Error'));
                        }
                        const serverError = error.error;
                        let modalStateError = '';
                        if (serverError && typeof serverError === 'object'){
                            for (const key in serverError){
                                if (serverError[key]){
                                    modalStateError += serverError[key] + '\n';
                                }
                            }

                        }
                        return throwError(modalStateError || serverError || 'Server error');

                    }
                }
            )

        );


    }
}

// Ésta clase se inyecta en el app.module.ts module
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
