
import '../Styles/Board.css';
import Board from './Board';
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/Game.css";
import { useState } from "react";
import { firebase } from "../services/firebase";
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

  
  return (
    <div className='gameBody'>
      <Navbar props={(users, setUsers, user)}/>
      <Board props={user}/>
    </div>
  );
}
