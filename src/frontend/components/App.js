import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import Card from "./card/card";
// import CardShow from "./card/card_show";
import "../../styles/index.scss";
import SplashPage from "./splash/splashPage";
import Dashboard from "./dashboard/dashboard";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
