import React from "react";
import { Switch, Route } from "react-router-dom";
import './styles/index.css';
import CardShow from './components/card/card_show'

function App() {
  return (
    <div>
      <Route path="/card" component={CardShow} />
    </div>
  );
}

export default App;
