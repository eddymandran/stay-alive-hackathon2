import React, { useState } from "react";
import "./App.css";
import { firebase, messaging } from "./services/firebase";
import { useEffect } from "react";
import upload from './uploadFiles/uploadFiles';
import "./App.css";
const fb = firebase;

function App() {
  const [users, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState("");
  const [picture, setPicture] = useState(null);


  // Add a new document in collection "cities"
  const createUser = (event) => {
    event.preventDefault();
    //upload(picture);
    fb.firestore()
      .collection("Users")
      .doc("1oZUtkBNEGob0MnumsgU")
      .set({
        name: pseudo,
        picturePath: picture.name,
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
        <input type='file' placeholder='Importer votre avatar' onChange={(e) => setPicture(e.target.files[0])}/>
        <input type="submit" value="Rejoindre la partie" />
      </form>
    </div>
  );
}

export default App;
