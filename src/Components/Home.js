import React from "react";
import "../Styles/Home.css";
import { firebase } from "../services/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const fb = firebase;

export default function Home() {
  const [pseudo, setPseudo] = useState("");
  const [isSetUser, setIsSetUser] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [idGame, setIdGame] = useState("");

  const [notChosen, setNotChosen] = useState(false);
  const handleChosen = () => {
    setNotChosen(!notChosen);
  };

  const createUser = (event) => {
    event.preventDefault();
    fb.firestore()
      .collection("Users")
      .add({
        name: pseudo,
        picture: "schwarzy.png",
        x: 0,
        y: 0,
        score: 0,
      })
      .then(function (res) {
        // console.log("Document successfully written!", res.id);
        setIsSetUser(!isSetUser);
        setIdUser(res.id);
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const createGame = async () => {
    await fb.firestore()
    .collection("Game")
    .add({
      date: fb.firestore.FieldValue.serverTimestamp()
    })
    .then(function (res) {
      // console.log("Document successfully written!", res.id);
      setIdGame(res.id);
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }

  return (
    <div className="home">
      <h1 className="titleHome">
        <span className="titleHome1">Stay </span>Alive !
      </h1>
      <p className="chooseAvatarStyle">Choose your avatar</p>
      <div className="chooseAvatarImgs">
        <div
          className={notChosen ? "AvatarsLook1" : "AvatarsLook1C"}
          onClick={handleChosen}
        ></div>
        <div className="AvatarsLook2" onClick={handleChosen}></div>
        <div className="AvatarsLook3" onClick={handleChosen}></div>
        <div className="AvatarsLook4" onClick={handleChosen}></div>
        <div className="AvatarsLook5" onClick={handleChosen}></div>
      </div>
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
        
        {!isSetUser ? (
          <button type="submit" className="buttonHome">
            Créer mon pseudo
          </button>
        ) : (
          <div>
            {/* <Link to={`ChooseMap/${idUser}`}>
              <input type="button" value="Create" className="buttonHome" onClick={createGame} />
            </Link> */}
            <input type="button" value="Create" className="buttonHome" onClick={createGame} />
            <span>{idGame !== "" ? idGame : ""}</span>
          <br/>
            <Link to={`game/${idUser}`} >
              <input type="button" value="Join : " className="buttonHome" />
            </Link>
            <input type="text" className="gameInput" placeholder="Token Game" onChange={(e) => setIdGame(e.target.value)} />
         </div>
        )}
      </form>
    </div>
  );
}
