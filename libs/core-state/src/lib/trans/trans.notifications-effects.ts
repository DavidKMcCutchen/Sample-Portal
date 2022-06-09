import { Injectable } from '@angular/core';
import { NotificationsService } from '@sample/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as TransActions from './trans.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(TransActions.createTransactionSuccess),
        tap(() => this.notificationService.notify('Create Transaction Successful'))
      ) },
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(TransActions.updateTransactionSuccess),
        tap(() => this.notificationService.notify('Update Transaction Successful'))
      ) },
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(TransActions.deleteTransactionSuccess),
        tap(() => this.notificationService.notify('Delete Transaction Successful'))
      ) },
    { dispatch: false }
  );

  loadAllSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(TransActions.loadTransactionsSuccess),
        tap(() => this.notificationService.notify('Load Transactions Successful'))
      ) },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
