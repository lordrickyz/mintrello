import React from "react";
import { Route } from "react-router-dom";
import CardShow from './card/card_show';

const App = () => {
  return (
    <div>
      <Route path="/" component={CardShow} />
    </div>
  );
}

export default App;
