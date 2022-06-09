import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FeaturesAuthFacade } from '@sample/core-state';


@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  title= 'Sample MDV';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'home', icon: 'view_list', title: 'Sample'}
  ];



  constructor(private authFacade: FeaturesAuthFacade) {}

  logoutAttempt() {
    this.authFacade.logout();
  }

  register() {
    this.authFacade.register();
  }
}
