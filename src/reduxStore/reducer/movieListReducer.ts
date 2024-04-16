// reducers.ts

import { ADD_ITEM, AddItemAction } from '../actions';

export interface ItemState {
    items: string[];
}

const initialState: ItemState = {
    items: [],
};

const itemReducer = (state = initialState, action: AddItemAction): ItemState => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
};

export default itemReducer;
