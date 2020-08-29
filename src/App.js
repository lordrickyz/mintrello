import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import SplashPage from "../src/components/splash_page/splashPage"
import './styles/index.scss';

function App() {
  return (

    // <Switch>
    //   <Route exact path="/" component={SplashPage} />
    // </Switch>

    <div className="App">
      Hello

      <SplashPage />
    
        {/* <Route exact path="/" component={SplashPage} /> */}
     

      
    </div>
  );
}

export default App;
