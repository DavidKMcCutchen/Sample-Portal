import { emptyTrans } from "@sample/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { transAdapter, TransactionState, TRANSACTION_FEATURE_KEY } from "./trans.reducer";

export const selectTransactionState = createFeatureSelector<TransactionState>(TRANSACTION_FEATURE_KEY);

const { selectAll, selectEntities } = transAdapter.getSelectors();

export const selectTransactionsLoaded = createSelector(
    selectTransactionState,
    (state: TransactionState) => state.loaded
);

export const selectTransactionError = createSelector(
    selectTransactionState,
    (state: TransactionState) => state.error
);

export const selectAllTransactions = createSelector(
    selectTransactionState,
    (state: TransactionState) => selectAll(state)
);

export const selectTransactionEntities = createSelector(
    selectTransactionState,
    (state: TransactionState) => selectEntities(state)
);

export const selectSelectedTransactionId = createSelector(
    selectTransactionState,
    (state: TransactionState) => state.selectedId
);

export const selectSelectedTransaction = createSelector(
    selectTransactionEntities,
    selectSelectedTransactionId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyTrans
);