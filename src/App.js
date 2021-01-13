import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ChooseMap from './Components/ChooseMap';
import Game from './Components/Game';

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/ChooseMap' component={ChooseMap} />
            <Route path='/Game' component={Game} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
