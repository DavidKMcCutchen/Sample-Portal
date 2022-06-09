import { Transaction } from "@sample/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as TransactionActions from './trans.actions';

export const TRANSACTION_FEATURE_KEY = 'trans';

export interface TransactionState extends EntityState<Transaction> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface TransactionPartialState {
    readonly [TRANSACTION_FEATURE_KEY]: TransactionState
};

export const transAdapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>({ selectId: (a) => a.id});

export const initialTransactionState: TransactionState = transAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state: any, { error }: any): TransactionState => ({ ...state, error});

const onDispatch = (state: any, action: any): TransactionState => ({
    ...state,
    loaded: false,
    error: null
});

const _transReducer = createReducer(
    initialTransactionState,
    on(
        TransactionActions.loadTransactionFailed,
        TransactionActions.loadTransactionsFailed,
        TransactionActions.createTransactionFailed,
        TransactionActions.updateTransactionFailed,
        TransactionActions.deleteTransactionFailed,
        onFailed
    ),
    on(
        TransactionActions.loadTransaction,
        TransactionActions.loadTransactions,
        TransactionActions.createTransaction,
        TransactionActions.updateTransaction,
        TransactionActions.deleteTransaction,
        onDispatch
    ),
    on(
        TransactionActions.loadTransactionSuccess, (state, { trans }) =>
        transAdapter.upsertOne(trans, {...state, loaded: true})
    ),
    on(
        TransactionActions.selectTransaction, (state, { transId }) => ({
            ...state,
            selectedId: transId
        })
    ),
    on(
        TransactionActions.loadTransactionsSuccess, (state, { trans }) =>
        transAdapter.setAll(trans, {...state, loaded: true})
    ),
    on(
        TransactionActions.deleteTransactionSuccess, (state, { trans }) =>
        transAdapter.removeOne(trans.id, {...state, loaded: true})
    ),
    on(
        TransactionActions.updateTransactionSuccess, (state, { trans }) =>
        transAdapter.updateOne(
            {id: trans.id, changes: trans},
            {...state, loaded: true}
        )
    ),
    on(
        TransactionActions.createTransactionSuccess, (state, {trans }) =>
        transAdapter.addOne(trans, {...state, loaded: true})
    ),
)

export function transReducer(
    state: TransactionState | undefined,
    action: Action
) {
    return _transReducer(state, action)
}