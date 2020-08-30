import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import CardShow from "./card/card_show";
import Card from "./card/card_index";
import CardShow from './card/card_show';

const App = () => {
  return (
    <div>
      <Modal/>
      <Switch>
        <Route exact path="/" component={SplashPage} />

        {/* <Route path="/" component={CardShow} /> */}
      </Switch>
    </div>
  );
}

export default App;
