import React from "react";
import ReactDOM from "react-dom";
import setupEventBroadcast from "./lesson2/events";
import App from "./lesson2/App";

setupEventBroadcast()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
