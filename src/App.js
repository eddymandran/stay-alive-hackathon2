import React, { useState } from "react";
import "./App.css";
import { firebase, messaging } from "./services/firebase";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ChooseMap from "./Components/ChooseMap";
import Game from "./Components/Game";
import "./App.css";

const fb = firebase;

function App() {
  const [users, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState("");

  // Add a new document in collection "cities"

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
            <Route
              path="/Game"
              component={Game}
              props={(users, setUsers, pseudo)}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
