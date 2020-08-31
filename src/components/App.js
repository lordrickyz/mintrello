import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import SplashPage from "./splash/splashPage";
import Dashboard from "./dashboard/dashboard";
import Navbar from "./nav/navbar";
import Tutorial from "./tutorial/tutorial";
import "../styles/index.scss";

const App = () => {
  return (
    <div>
      <Modal />
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/tutorial" component={Tutorial} />
      </Switch>
    </div>
  );
};

export default App;
