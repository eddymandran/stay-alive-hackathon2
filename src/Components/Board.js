/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import '../Styles/Board.css';
import { GeneralContext } from '../Contexts/GeneralContext';
import nerf from '../images/nerf.png';
import schwarzy from "../images/schwarzy.png";
import { firebase } from "../services/firebase";
const fb = firebase;

export default function Board(props) {
  const { scorePlayer, setScorePlayer } = useContext(GeneralContext);
  document.body.onmousemove = function () {
    document.getElementById('scope').style.marginLeft = event.x - 32 + 'px';
    document.getElementById('scope').style.marginTop = event.y - 32 + 'px';
  };
  const user = props;

  const speed = 22;
  let leftSpace = 0;
  let topSpace = 0;

  document.body.onkeydown = function () {
    const myKey = event.keyCode;

    const target = document.getElementById('target');
    if (myKey === 37) {
      leftSpace -= speed;
      target.style.marginLeft = leftSpace + 'px';
    } else if (myKey === 38) {
      topSpace -= speed;
      target.style.marginTop = topSpace + 'px';
    } else if (myKey === 39) {
      leftSpace += speed;
      target.style.marginLeft = leftSpace + 'px';
    } else if (myKey === 40) {
      topSpace += speed;
      target.style.marginTop = topSpace + 'px';
    }
  };


  function shoot() {
    let bulletPosX = event.x - 32;
    let bulletPosY = event.y - 32;
    let targetPosX = document.getElementById('target').x;
    let targetPosXEdge = targetPosX + 100;
    let targetPosY = document.getElementById('target').y;
    let targetPosYEdge = targetPosY + 100;
    let newScore = scorePlayer;
    
    if (
      bulletPosX > targetPosX &&
      bulletPosX < targetPosXEdge &&
      bulletPosY > targetPosY &&
      bulletPosY < targetPosYEdge
    ) {
      newScore++;
      setScorePlayer(newScore);
    } else {
      newScore--;
      setScorePlayer(newScore);
    }
  }
  const setCoordonates = (e) => {
    fb.firestore()
      .collection("Users")
      .doc(user.props.id)
      .update({
        x: e.clientX,
        y: e.clientY,
      })
      .then((res) => {
        console.log("Coordonates updated");
      })
      .catch((err) => {
        console.error("Error writing coordonates", err);
      });
    /*     setUser({x: e.clientX, y: e.clientY});
    console.log(user); */
  };

  return (
    <div id='container' onClick={(e) => setCoordonates(e)}>
      
      <img
          src={schwarzy}
          alt={`avatar${user.props.picture}`}
          style={{
            position: "absolute",
            top: `${user.props.y}px`,
            left: `${user.props.x}px`,
            zIndex: 3
          }}
        />
      <img
        src={nerf}
        id='scope'
        onClick={shoot}
        alt='scope'
      />
      <img
        src='http://www.clker.com/cliparts/v/m/O/4/Z/t/target-board-hi.png'
        id='target'
        alt='target'
      />
      <h1>STAY ALIVE !!</h1>
    </div>
  );
}
