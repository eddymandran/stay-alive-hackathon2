import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import ChooseMap from './Components/ChooseMap';
import Game from './Components/Game';
import GeneralContextProvider from './Contexts/GeneralContext';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  const [users, setUsers] = useState([]);
  const [chosenPicturePath, setChosenPicturePath] = useState("schwarzy.png");
  const [pseudo, setPseudo] = useState("");

  


  
  return (
    <div className='App'>
      <ToastProvider placement="top-right">
      <GeneralContextProvider>
        <Router>
          <main>
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
              props={(pseudo, setPseudo)}
            />
            <Route path="/ChooseMap/:iduser" component={ChooseMap} />
            <Route exact path="/Game/:iduser" component={Game} />
          </Switch>
          </main>
        </Router>
      </GeneralContextProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
