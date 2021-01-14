import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ChooseMap from "./Components/ChooseMap";
import Game from "./Components/Game";
import React, { useContext, useEffect, useState } from 'react';
import GeneralContextProvider from './Contexts/GeneralContext';
import { ToastProvider } from 'react-toast-notifications';
import { GeneralContext } from './Contexts/GeneralContext';

function App() {
  const [users, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState("");
  const { background } = useContext(GeneralContext);

  let resultat=""

  const  Wallpaper = () =>{
    if (background === 'jardin' ){
    resultat="App Jardin"
    }

    if (background === 'ville' ){
      resultat="App Ville"
      }
    
    if (background === 'resto' ){
        resultat="App Resto"
      }
  }
  useEffect(() => {
    Wallpaper()
  }, [background]);
 

// <div className={`${resultat}`}> a remplacer ligne 38

  
  return (
      <div className='App'>
      <ToastProvider placement="top-right">
      <GeneralContextProvider>
        <Router>
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/choosemap' component={ChooseMap} />
              <Route path='/game' component={Game} />
            </Switch>
          </main>
        </Router>
      </GeneralContextProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
