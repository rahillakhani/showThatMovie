import { applyMiddleware, createStore, Middleware, Store } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { isDev } from "../../utils";
// import { enableLogger, isDev } from "../utils";
// import { IGlobalState } from "./interfaces";
import rootReducer from "../reducer";
import { IGlobalState } from "./types";

export class GlobalStore {
    private static store: Store;

    private static initializeStore() {
        const logger = createLogger();
        const middlewares: Middleware[] = [thunk];
        isDev && middlewares.push(logger);
        GlobalStore.store = createStore(rootReducer, applyMiddleware(...middlewares));
    }

    static getStore() {
        if (!GlobalStore.store) GlobalStore.initializeStore();
        return GlobalStore.store;
    }

    static getCurrentState(): IGlobalState {
        return GlobalStore.getStore().getState();
    }
}
