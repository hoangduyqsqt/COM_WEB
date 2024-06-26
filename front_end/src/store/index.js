import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authenticateReducer from "./reducers/authenticateReducer";
import subRouterReducer from "./reducers/subRouteReducer";

const rootReducer = combineReducers({
  authenticateReducer,
  subRouterReducer,
});

const persistsConfig = {
  key: "root",
  storage,
  whitelist: ["authenticateReducer", "subRouterReducer"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistsConfig, rootReducer);

export const saga = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(saga))
);

export const persistor = persistStore(store);
