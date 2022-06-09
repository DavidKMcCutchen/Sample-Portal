import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { UiLoginModule } from '@sample/ui-login';
import { EnvironmentModule } from '@sample/environment';
import { CoreStateModule } from '@sample/core-state';
import { CoreDataModule } from '@sample/core-data';
import { MaterialModule } from '@sample/material';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './home/transactions/transactions.component';
import { PipesModule } from '@sample/pipes';

@NgModule({
  declarations: [AppComponent, HomeComponent, TransactionsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PipesModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
