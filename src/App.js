import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/game' component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
