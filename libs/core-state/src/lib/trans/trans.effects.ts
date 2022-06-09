import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Transaction } from "@sample/api-interfaces";
import { TransactionsService } from "@sample/core-data";
import * as TransActions from './trans.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class TransactionEffects{
    loadTransaction$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(TransActions.loadTransaction),
            fetch({
                run: (action) =>
                    this.transService
                        .find(action.transId)
                        .pipe(map((trans: Transaction) => TransActions.loadTransactionSuccess({ trans }))),
                    onError: (action, error) => TransActions.loadTransactionFailed({ error })    
            })
        ) });
    loadTransactions$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(TransActions.loadTransactions),
            fetch({
                run: () =>
                    this.transService
                    .getAll()
                    .pipe(
                        map((trans: Transaction[]) => TransActions.loadTransactionsSuccess({ trans }))
                    ),
                onError: (action, error) => TransActions.loadTransactionsFailed({ error })    
            })
        ) });
        createTransaction$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(TransActions.createTransaction),
            pessimisticUpdate({
                run: (action) =>
                    this.transService
                        .create(action.trans)
                        .pipe(map((trans: Transaction) => TransActions.createTransactionSuccess({ trans }))),
                    onError: (action, error) => TransActions.createTransactionFailed({ error })    
            })
    ) });

    updateTransaction$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(TransActions.updateTransaction),
            pessimisticUpdate({
                run: (action) =>
                    this.transService
                        .update(action.trans)
                        .pipe(map((trans: Transaction) => TransActions.updateTransactionSuccess({ trans}))),
                    onError: (action, error) => TransActions.updateTransactionFailed({ error })    
            })
    ) });

    deleteTransaction$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(TransActions.deleteTransaction),
            pessimisticUpdate({
                run: (action) =>
                    this.transService
                        .delete(action.trans)
                        .pipe(
                            map(() => TransActions.deleteTransactionSuccess({ trans: action.trans }))
                        ),
                    onError: (action, error) => TransActions.deleteTransactionFailed({ error })    
            })
        ) });    


    constructor(
        private actions$: Actions,
        private transService: TransactionsService
    ) {}    
}