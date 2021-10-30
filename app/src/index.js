import React from "react";
import ReactDOM from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import * as Wails from "@wailsapp/runtime";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";

Wails.Init(() => {
  ReactDOM.render(
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>,
    document.getElementById("root"),
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