/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from "react";
import "../Styles/Board.css";
import { GeneralContext } from "../Contexts/GeneralContext";
import nerf from "../images/nerf.png";
import schwarzy from "../images/schwarzy.png";
import obama from "../images/obama.png";
import madonna from "../images/madonna.png";
import einstein from "../images/einstein.png";
import lee from "../images/lee.png";
import { firebase } from "../services/firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const fb = firebase;

export default function Board(props) {
  const { scorePlayer, setScorePlayer } = useContext(GeneralContext);
  const history = useHistory();

  const [users, setUsers] = useState([]);
  

  document.body.onmousemove = function () {
    document.getElementById("scope").style.marginLeft = event.x - 32 + "px";
    document.getElementById("scope").style.marginTop = event.y - 32 + "px";
  };
  const onChangePicture = (picture) => {
    switch (picture){
      case 'schwarzy':
        return schwarzy;
      case 'obama':
        return obama;
      case 'einstein':
        return einstein;
      case 'madonna':
        return madonna;
      case 'lee':
        return lee;
      default:
        return schwarzy;
    }
  }

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

  //const [player, setPlayer] = useState([props]);
  const player = props;
  //console.log(player);

  const speed = 22;
  let leftSpace = player.props.x;
  let topSpace = player.props.y;

  const handleScorePlayer = async (scorePlayer, iduser) => {
    await fb
      .firestore()
      .collection("Users")
      .doc(iduser)
      .update({
        score: scorePlayer,
      })
      .then((res) => {
        //console.log(res.data);
      })
      .catch((err) => {
        console.error("Error writing coordonates", err);
      });
  };

  const setCoordonates = async (posX, posY, iduser) => {
    await fb.firestore()
      .collection("Users")
      .doc(iduser)
      .update({
        x: posX,
        y: posY,
      })
      .then((res) => {
        //console.log("Coordonates updated");
      })
      .catch((err) => {
        console.error("Error writing coordonates", err);
      });
    
  };

  document.body.onkeydown = function (event) {
    const myKey = event.keyCode;
    

    const target = document.getElementById(`target${player.props.id}`);
    if (myKey === 37) {
      leftSpace -= speed;
      target.style.marginLeft = leftSpace + "px";
    } else if (myKey === 38) {
      topSpace -= speed;
      target.style.marginTop = topSpace + "px";
    } else if (myKey === 39) {
      leftSpace += speed;
      target.style.marginLeft = leftSpace + "px";
    } else if (myKey === 40) {
      topSpace += speed;
      target.style.marginTop = topSpace + "px";
    }
    if (myKey === 81) {
      history.push("/");
    }
    // console.log(target.offsetTop);
    // console.log(target.offsetLeft);
    setCoordonates(target.offsetLeft, target.offsetTop, player.props.id);
  };

  function shoot() {
    let bulletPosX = event.x - 32;
    let bulletPosY = event.y - 32;
    let targetPosX = document.getElementById(`target${player.props.id}`).x;
    let targetPosXEdge = targetPosX + 100;
    let targetPosY = document.getElementById(`target${player.props.id}`).y;
    let targetPosYEdge = targetPosY + 100;

    let newScore = scorePlayer;

    if (
      bulletPosX > targetPosX &&
      bulletPosX < targetPosXEdge &&
      bulletPosY > targetPosY &&
      bulletPosY < targetPosYEdge
    ) {
      newScore--;
      setScorePlayer(newScore);
    } else {
      newScore++;
      setScorePlayer(newScore);
    }
    handleScorePlayer(newScore, player.props.id);
  }

  return (
    <div id="container">
      {users.filter((u) => u.name !== "test").map((user) => {
        return (
          <div
            key={user.id}
            style={{
              position: "absolute",
              top: `${user.y}px`,
              left: `${user.x}px`,
              zIndex: -1,
            }}
          >
            <img id={`target${user.id}`} alt="target" src={onChangePicture(user.picture)} />
            <h2>{user.name}</h2>
          </div>
        );
      })}

      <img
        src={nerf}
        id="scope"
        onClick={shoot}
        alt="scope"
        style={{
          position: "absolute",
        }}
      />

    </div>
  );
}
