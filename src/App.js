import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ChooseMap from "./Components/ChooseMap";
import Game from "./Components/Game";
import GeneralContextProvider from './Contexts/GeneralContext';
import { ToastProvider } from 'react-toast-notifications';


function App() {

  


  
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
