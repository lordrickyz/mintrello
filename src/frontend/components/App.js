import React from "react";
import { Route } from "react-router-dom";
import CardShow from './card/card_show';
import Card from "./card/card_index";

const App = () => {
  return (
    <div>
      <Route path="/" component={Card} />
    </div>
  );
}

export default App;
