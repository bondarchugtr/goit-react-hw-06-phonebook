import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "modern-normalize";
import store from "./redux/store";
import { myAction } from "./redux/actions";

console.log(store);
// console.log(myAction);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
