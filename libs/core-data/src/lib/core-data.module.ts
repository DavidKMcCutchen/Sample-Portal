import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeaturesAuthGuard } from './services/auth/auth-guard.service';
import { TokenInterceptor } from './services/auth/token-interceptor.service';
import { FeaturesUnAuthGuard } from './services/auth/unauth-guard.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    FeaturesAuthGuard,
    FeaturesUnAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class CoreDataModule {}
