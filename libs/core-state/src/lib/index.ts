import { ActionReducerMap } from "@ngrx/store";
import * as fromTrans from './trans/trans.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface AppState {
    [fromTrans.TRANSACTION_FEATURE_KEY]: fromTrans.TransactionState;
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.FeaturesAuthState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromTrans.TRANSACTION_FEATURE_KEY]: fromTrans.transReducer,
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.authReducer
};