import React from "react";
import { Route } from "react-router-dom";
import CardShow from "./card/card_show";
import Dashboard from "./dashboard/dashboard";

const App = () => {
  return (
    <div>
      <Route path="/" component={CardShow} />
      <Dashboard />
    </div>
  );
};

export default App;
