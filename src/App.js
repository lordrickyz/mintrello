import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SplashPage from "../src/components/splash_page/splashPage"
import "./styles/index.scss";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={SplashPage} />
      </Switch>
      {/* Hello

      <SplashPage /> */}
    
        {/* <Route exact path="/" component={SplashPage} /> */}
      
    </div>
    </Router>
  );
}

export default App;
