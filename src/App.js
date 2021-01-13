import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import LayoutContextProvider from './Contexts/layoutContext'
import './App.css';

function App() {
  return (
    <div className='App'>
      <LayoutContextProvider>
      <Router>
        <Switch>
          <Route path='/game' component={Game} />
        </Switch>
      </Router>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
