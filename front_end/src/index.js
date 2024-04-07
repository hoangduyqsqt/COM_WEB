import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import './index.css';
import App from './App';
import rootSaga from './store/saga'
import {saga, persistor, store } from "./store/index";

saga.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById("root")
);

