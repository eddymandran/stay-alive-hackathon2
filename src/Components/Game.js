import React from "react";
import Navbar from "./Navbar";
import "../Styles/Game.css";
import { useState } from "react";
import { firebase } from "../services/firebase";
import '../Styles/Board.css';
import Board from './Board';


const fb = firebase;

const useMove = () => {
  const [state, setState] = useState({x: 0, y: 0})

  const handleMouseMove = e => {
    e.persist()
    setState(state => ({...state, x: e.clientX, y: e.clientY}))
  }
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  }
}

export default function Game(props) {
  const params = props.match.params;
  const {x, y, handleMouseMove} = useMove();
  const [users, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState(params.pseudo);
  


  const setCoordonates = (e, x, y) => {
    console.log(x, y);
    console.log(pseudo);
    fb.firestore().collection('Users').doc(pseudo).update({
      x: x,
      y: y
    })
    .then(() => {
      console.log("Coordonates updated")
    })
    .catch((err) => {
      console.error('Error writing coordonates', err);;
    });
  }
  


  return (
    <div className="gameBody">
      <div className="mouseArea" onMouseMove={handleMouseMove} onClick={e => setCoordonates(e, x ,y)}>
     
      
    </div>
      <Navbar props={(users, setUsers, pseudo)} />
      <Board />
    </div>
  );
}
