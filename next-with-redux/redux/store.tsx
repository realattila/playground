import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { combineReducers } from "redux";

import rootReducer, { initialState } from "./reducer";
import rootSaga from "./saga";

const bindMiddleware = (middleware: Array<any>) => {
  if (process.env.NODE_ENV === "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (context: any) => {
  const sagaMiddleware = createSagaMiddleware();

  const store: any = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
