import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Sass/main.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="eventksa">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);