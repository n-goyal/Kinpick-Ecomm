import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // cache the application store
import logger from "redux-logger";

import rootReducer from "./root.reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
