import { Injectable } from "@angular/core";
import { Transaction } from "@sample/api-interfaces";
import { Action, ActionsSubject, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as TransactionActions from './trans.actions';
import * as TransactionSelectors from './trans.selectors';
import * as fromTransactions from './trans.reducer';


@Injectable({
    providedIn: 'root'
})

export class TransactionFacade {
    allTransactions$ = this.store.pipe(
        map((state) => TransactionSelectors.selectAllTransactions(state)),
    )
    selectedTransactions$ = this.store.select((TransactionSelectors.selectSelectedTransaction));
    loaded$ = this.store.select((TransactionSelectors.selectTransactionsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === TransactionActions.createTransaction({} as any) .type ||
        action.type === TransactionActions.updateTransaction({} as any) .type ||
        action.type === TransactionActions.deleteTransaction({} as any) .type 
        ))

        selectTransaction(transId: string) {
            this.dispatch(TransactionActions.selectTransaction({ transId }));
        };

        loadTransactions() {
            this.dispatch(TransactionActions.loadTransactions())
        };

        loadTransaction(transId: string) {
            this.dispatch(TransactionActions.loadTransaction({ transId }))
        };

        saveTransaction(trans: Transaction) {
            trans.id ? this.updateTransaction(trans) : this.createTransaction(trans)
        };

        createTransaction(trans: Transaction) {
            this.dispatch(TransactionActions.createTransaction({ trans }))
        };

        updateTransaction(trans: Transaction) {
            this.dispatch(TransactionActions.updateTransaction({ trans }))
        };

        deleteTransaction(trans: Transaction) {
            this.dispatch(TransactionActions.deleteTransaction({ trans }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromTransactions.TransactionPartialState>,
            private actions$: ActionsSubject
        ) {}
}