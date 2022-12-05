import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log('Ti sto intercettando da AuthInterceptor!', request);
        const newRequest = request.clone({
            headers: request.headers.append('Auth', 'SecretID').append('Firma', 'XYZ')
        });
        return next.handle(newRequest).pipe(tap(event => {
            console.log('Sono la risposta della chiamata da AuthInterceptor: ', event);

        }));
    }
}
