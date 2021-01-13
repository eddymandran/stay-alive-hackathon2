import React, { useState } from 'react';
import './App.css';
import {firebase, messaging} from './services/firebase'
import { useEffect } from 'react';
import "./App.css";
const fb = firebase;

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = fb.firestore().collection('Users').orderBy('age', 'desc').onSnapshot(u => {
      setUsers(u.docs.map(user => {
        return {id: user.id, ...user.data()}
      }))
    });

    return () => unsubscribe()
  }, []);

  return <div className="App">
    <h1>Stay Alive</h1>
    <ul>
      {users.map((u) => {
        return (<li key={u.id}>{u.name} {u.age}</li>);
      })}
    </ul>

  </div>;
}

export default App;
