import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ColorModeScript } from "@chakra-ui/react";
import Wails from "@wailsapp/runtime";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

import store from "./state/store";

import App from "./App";
import "./index.css";

Wails.Init(() => {
  ReactDOM.render(
    <React.StrictMode>
      <ColorModeScript />
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("app"),
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
