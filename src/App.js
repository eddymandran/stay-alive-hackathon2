import React, { useState } from "react";
import "./App.css";
import { firebase, messaging } from "./services/firebase";
import { useEffect } from "react";
import "./App.css";
const fb = firebase;

function App() {
  const [users, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState("");
  const [picturePath, setPicturePath] = useState("");

  // Add a new document in collection "cities"
  const createUser = (event) => {
    event.preventDefault();
    fb.firestore()
      .collection("Users")
      .doc("LA")
      .set({
        name: pseudo,
        picturePath: picturePath,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {
    const modifyUser = fb
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

    return () => modifyUser();
  }, []);

  return (
    <div className="App">
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
