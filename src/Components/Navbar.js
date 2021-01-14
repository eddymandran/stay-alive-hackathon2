import React from "react";
import "../Styles/Navbar.css";
import { useEffect } from "react";
import { firebase } from "../services/firebase";
import { useState } from "react";

const fb = firebase;

export default function Navbar() {
  const [users, setUsers] = useState([]);

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
    <div className="scoreBar">
      <div className="zoneAvatar">
        <img alt="personnage choisi"></img>
        <h5 className="title5">Pseudo</h5>
      </div>
      <hr />
      <div className="zoneScore">
        <h5 className="title5">Score</h5>
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
