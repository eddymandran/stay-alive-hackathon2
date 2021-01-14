import "../Styles/Navbar.css";
import { firebase } from "../services/firebase";
import React, { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import gagne from "../audio/gagne.mp3";
import pump from "../audio/pump.mp3";
import { GeneralContext } from "../Contexts/GeneralContext";
import { useToasts } from "react-toast-notifications";

const fb = firebase;
const audioClips = new Howl({
  src: [gagne],
});
const audioClips1 = new Howl({
  src: [pump],
});

export default function Navbar() {
  const [users, setUsers] = useState([]);
  const { scorePlayer } = useContext(GeneralContext);
  const { addToast } = useToasts();

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

  function goodPlayer() {
    if (scorePlayer === 10 || scorePlayer === 20) {
      audioClips.play();
      addToast("Vous êtes déchainé !", {
        appearance: "success",
        autoDismiss: true,
      });
    } else if (scorePlayer === -1 || scorePlayer === -10) {
      audioClips1.play();
      addToast("Vous dormez ??? Debout la dedans !!!", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }
  useEffect(() => {
    goodPlayer();
  }, [scorePlayer]);

  return (
    <div className="scoreBar">
      <div className="zoneAvatar">
        <img alt="personnage choisi"></img>
        <h5 className="title5">Pseudo</h5>
      </div>
      <hr />
      <div className="zoneScore">
        <h5 className="title5">
          {" "}
          Your score :<p>{scorePlayer}</p>
        </h5>
        <img alt="schtroumph"></img>
      </div>
      <hr />
      <div className="zoneCharacters">
        <h5 className="title5">Personnages connectés</h5>

        <ul className="charactersList">
          {users.map((u) => {
            return (
              <li key={u.id}>
                {u.name} {u.age}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
