import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/index.css";
import Columns from "./components/columns/columns";

function App() {
  return (
    <div className="App">
      Hello
      <Columns />
    </div>
  );
}

export default App;
