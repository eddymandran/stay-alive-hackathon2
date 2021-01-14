import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ChooseMap from "./Components/ChooseMap";
import Game from "./Components/Game";

function App() {
  const [users, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState("");

  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
              props={(pseudo, setPseudo)}
            />
            <Route path="/ChooseMap" component={ChooseMap} />
            <Route exact path="/Game/:pseudo" component={Game} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
