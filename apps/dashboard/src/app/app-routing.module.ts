import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, WildComponent } from "@sample/ui-login";
import { FeaturesAuthGuard, FeaturesUnAuthGuard } from '@sample/core-data';
RegisterComponent
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { RegisterComponent } from 'libs/ui-login/src/lib/register/register.component';

const routes: Route[] = [
  {path: '', component: HomeComponent, canActivate: [FeaturesAuthGuard] },
  {path: 'wild', component: WildComponent},
  {path: 'home', component: HomeComponent, canActivate: [FeaturesAuthGuard]},
  // {path: 'home/:transactions', component: , canActivate: [FeaturesAuthGuard] },
  {path: 'login', component: LoginComponent, canActivate: [FeaturesUnAuthGuard] },
  {path: 'register', component: RegisterComponent, canActivate: [FeaturesUnAuthGuard]},
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class RoutingModule { }