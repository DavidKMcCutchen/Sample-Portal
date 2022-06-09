import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { FeaturesAuthService } from '@sample/core-data';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import * as authActions from './auth.actions';

@Injectable()
export class FeaturesAuthEffects {
  initAuth$ = createEffect(() =>
  { return this.actions$.pipe(
    ofType(rootEffectsInit),
    tap(() => this.authService.setToken(this.authService.getToken())),
    map(() => this.authService.getToken() ?? ''),
    filter((token) => token !== 'null' || !token ),
    map((access_token: string) =>
      authActions.hydrateToken({ access_token })
      )
    ) }
  );

  userRequestToLogin$ = createEffect(() =>
  { return this.actions$.pipe(
    ofType(authActions.loginRequested),
    switchMap((loginPayload) =>
      this.authService.login(loginPayload).pipe(
        map(({ access_token }) =>
        authActions.loginRequestAccepted({ access_token })
        ),
        catchError((error) =>
        of(authActions.loginRequestRejected({ error })) )
      ))
  ) });

  setAccessTokenToLocalStorage$ = createEffect(() =>
  { return this.actions$.pipe(
    ofType(authActions.loginRequestAccepted),
    tap(({ access_token }) => this.authService.setToken(access_token)),
    tap(() => this.router.navigate(['/']))
  ) },
  { dispatch: false }
  );

  userLoggedOut$ = createEffect(() =>
  { return this.actions$.pipe(
    ofType(authActions.logoutClicked),
    tap(() => this.authService.logout())
  ) },
  { dispatch: false }
  );

  userRegister$ = createEffect(() =>
  { return this.actions$.pipe(
    ofType(authActions.registerClicked),
    tap(() => this.authService.register())
  ) },
  { dispatch: false }
  )


  constructor(
    private authService: FeaturesAuthService,
    private actions$: Actions,
    private router: Router
  ) {}

}