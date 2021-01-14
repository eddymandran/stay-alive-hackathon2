import React, { useState } from "react";
import "./App.css";
import { firebase, messaging } from "./services/firebase";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import ChooseMap from './Components/ChooseMap';
import Game from './Components/Game';
import "./App.css";

const fb = firebase;

function App() {
  const [users, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState("");

  // Add a new document in collection "cities"
  const createUser = (event) => {
    event.preventDefault();
    fb.firestore()
      .collection("Users")
      .doc("1oZUtkBNEGob0MnumsgU")
      .set({
        name: pseudo, 
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {
    const getUsers = fb
      .firestore()
      .collection("Users")
      .orderBy("name", "asc")
      .onSnapshot((u) => {
        setUsers(
          u.docs.map((user) => {
            return { id: user.id, ...user.data() };
          })
        );
      });

    return () => getUsers();
  }, []);

  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/ChooseMap' component={ChooseMap} />
            <Route path='/Game' component={Game} />
          </Switch>
        </main>
      </Router>
    
      <h1>Stay Alive</h1>
      <ul>
        {users.map((u) => {
          return (
            <li key={u.id}>
              {u.name} {u.age}
            </li>
          );
        })}
      </ul>
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        ></input>
        <input type="submit" value="Rejoindre la partie" />
      </form>
      </div>
    );
}



export default App;
