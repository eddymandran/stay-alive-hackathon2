import React from "react";
import "../Styles/Home.css";
import { firebase } from "../services/firebase";
import { useState } from "react";

const fb = firebase;

export default function Home() {
  const [pseudo, setPseudo] = useState("");

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

  return (
    <div className="home">
      <h1 className="titleHome">
        <span className="titleHome1">Stay </span>Alive !
      </h1>
      <form className="formLogin" onSubmit={createUser}>
        <label for="name" className="texteLabel">
          Pseudo
        </label>
        <input
          type="text"
          name="name"
          className="pseudoInput"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        ></input>
        <button type="submit" className="buttonHome">
          Rejoindre
        </button>
      </form>
    </div>
  );
}
