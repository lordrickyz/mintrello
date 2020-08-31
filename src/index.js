import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./components/store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
