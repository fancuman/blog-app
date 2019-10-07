import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import App from "./components/App";
import thunk from "redux-thunk";

ReactDom.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
