import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/Game.css";
import { useState } from "react";
import { firebase } from "../services/firebase";
import schwarzy from '../images/schwarzy.png';
const fb = firebase;

// const useMove = () => {
//   const [state, setState] = useState({x: 0, y: 0})

//   const handleMouseMove = e => {
//     e.persist()
//     setState(state => ({...state, x: e.clientX, y: e.clientY}))
//   }
//   return {
//     x: state.x,
//     y: state.y,
//     handleMouseMove,
//   }
// }

export default function Game(props) {
  const params = props.match.params;
  const idUser = params.iduser;
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = fb
      .firestore()
      .collection("Users")
      .doc(idUser)
      .onSnapshot((u) => {
        setUser({ id: u.id, ...u.data() });
      });

    return () => getUser();
  }, []);
  

  const setCoordonates = (e) => {
    // fb.firestore()
    //   .collection("Users")
    //   .doc(idUser)
    //   .update({
    //     x: e.clientX,
    //     y: e.clientY,
    //   })
    //   .then((res) => {
    //     console.log("Coordonates updated");
    //   })
    //   .catch((err) => {
    //     console.error("Error writing coordonates", err);
    //   });
    setUser({x: e.clientX, y: e.clientY});
    console.log(user);
  };
  return (
    <div className="gameBody">
      <div className="mouseArea" onMouseMove={(e) => setCoordonates(e)}>
      <img src={schwarzy} alt={`avatar${user.picture}`} style={{ position: 'absolute', top: `${user.y}px`, left: `${user.x}px`}}/>

        {/* <img src={`../images/${user.picture}`} alt={`avatar${user.picture}`} style={{ position: 'absolute', top: `${user.y}px`, left: `${user.x}px`}}/> */}
        </div>
      <Navbar props={(users, setUsers, user)} />
    </div>
  );
}
