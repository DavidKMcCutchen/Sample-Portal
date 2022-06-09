import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturesAuthService } from './auth-service.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: FeaturesAuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getToken();

    request = request.clone({
      setHeaders: {
        FeaturesAuthorization: `Bearer ${accessToken}`,
      },
    });

    return next.handle(request);
  }
}
