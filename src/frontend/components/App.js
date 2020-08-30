import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import Card from "./card/card_index";
// import CardShow from "./card/card_show";
import SplashPage from "./splash/splashPage";
import "../../styles/index.scss";
import Dashboard from "./dashboard/dashboard";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/cards" component={Card} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
