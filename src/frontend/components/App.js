import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
// import Card from "./card/card";
// import CardShow from "./card/card_show";
import "../../styles/index.scss";
import SplashPage from "./splash/splashPage";
import Dashboard from "./dashboard/dashboard";
import Navbar from "./nav/navbar";
import Tutorial from "./tutorial/tutorial";

const App = () => {
  return (
    <div>
      <Modal />
      <Navbar />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact patch="/tutorial" component={Tutorial} />
      </Switch>
    </div>
  );
};

export default App;
