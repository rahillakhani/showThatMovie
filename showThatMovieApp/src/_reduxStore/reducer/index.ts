// reducers.ts

import { combineReducers } from 'redux';
import itemReducer, { ItemState } from './movieListReducer.ts';

export interface RootState {
    items: ItemState;
}

const rootReducer = combineReducers<RootState>({
    items: itemReducer,
});

export default rootReducer;
