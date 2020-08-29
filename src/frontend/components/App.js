import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import CardShow from './card/card_show';
import Card from "./card/card_index";

const App = () => {
  return (
    <div>
      <Modal/>
      <Switch>
        <Route path="/" component={Card} />
      </Switch>
    </div>
  );
}

export default App;
