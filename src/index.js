import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./components/store/store";
import initialData from "./initial_data";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if (localStorage.getItem("mintrello") != null) {
    preloadedState = JSON.parse(localStorage.getItem("mintrello"));
  } else {
    preloadedState = initialData;
  }
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
