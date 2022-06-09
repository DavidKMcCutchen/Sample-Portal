import { createAction, props } from "@ngrx/store";
import {  Transaction } from "@sample/api-interfaces";

// Select Entity

export const selectTransaction = createAction(
    '[Transaction] Select Transaction',
    props<{ transId: string }>()
);

// Load all Entities

export const loadTransactions = createAction(
    '[Transaction] Load Transactions'
);

export const loadTransactionsSuccess = createAction(
    '[Transaction] Load Transactions Success',
    props<{ trans: Transaction[]}>()
);

export const loadTransactionsFailed = createAction(
    '[Transaction] Load Transactions Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadTransaction = createAction(
    '[Transaction] Load Transaction',
    props<{ transId: string}>()
);

export const loadTransactionSuccess = createAction(
    '[Transaction] Load Transaction Success',
    props<{ trans: Transaction}>()
);

export const loadTransactionFailed = createAction(
    '[Transaction] Load Transaction Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createTransaction = createAction(
    '[Transaction] Create Transaction',
    props<{ trans: Transaction}>()
);

export const createTransactionSuccess = createAction(
    '[Transaction] Create Transaction Success',
    props<{ trans: Transaction}>()
);

export const createTransactionFailed = createAction(
    '[Transaction] Create Transaction Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateTransaction = createAction(
    '[Transaction] Update Transaction',
    props<{ trans: Transaction}>()
);

export const updateTransactionSuccess = createAction(
    '[Transaction] Update Transaction Success',
    props<{ trans: Transaction}>()
);

export const updateTransactionFailed = createAction(
    '[Transaction] Create Transaction Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteTransaction = createAction(
    '[Transaction] Delete Transaction',
    props<{ trans: Transaction}>()
);

export const deleteTransactionSuccess = createAction(
    '[Transaction] Delete Transaction Success',
    props<{ trans: Transaction}>()
);

export const deleteTransactionFailed = createAction(
    '[Transaction] Create Transaction Failed',
    props<{ error: any}>()
);