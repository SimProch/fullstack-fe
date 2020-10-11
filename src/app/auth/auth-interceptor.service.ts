import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthorizationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${this._authService.getToken()}`,
      },
    });

    return next.handle(req);
  }
}
