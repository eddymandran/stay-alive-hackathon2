import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ChooseMap from "./Components/ChooseMap";
import Game from "./Components/Game";

function App() {

  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route path="/ChooseMap/:iduser" component={ChooseMap} />
            <Route
              exact
              path="/Game/:iduser"
              component={Game}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
