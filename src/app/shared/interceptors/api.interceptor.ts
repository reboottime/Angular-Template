import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const url = this.getRequestUrl(req.url);
    const clonedReq = req.clone({
      url,
    });

    return next.handle(clonedReq).pipe(
      map((event) => {
        // You can perform some logic with the response here if needed
        console.log('Response intercepted:', event);
        return event;
      }),
      catchError((error) => {
        if (error.status === 401) {
          // Handle 401 Unauthorized error, for example, redirect to login page
          // Or attempt to get new token with a refresh token
        }

        console.error('Error intercepted:', error);

        return throwError(error);
      })
    );
  }

  private getRequestUrl(requestPath: string) {
    const url = `${environment.apiUrl}${requestPath}`;

    return url.replace(/(?<!https?:)\/{2,}/g, '/');
  }
}
