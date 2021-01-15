/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from "react";
import "../Styles/Board.css";
import { GeneralContext } from "../Contexts/GeneralContext";
import nerf from "../images/nerf.png";
import schwarzy from "../images/schwarzy.png";
import { firebase } from "../services/firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const fb = firebase;

export default function Board(props) {
  const { scorePlayer, setScorePlayer } = useContext(GeneralContext);
  const history = useHistory();

  document.body.onmousemove = function () {
    document.getElementById("scope").style.marginLeft = event.x - 32 + "px";
    document.getElementById("scope").style.marginTop = event.y - 32 + "px";
  };
  const { user } = props;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = fb
      .firestore()
      .collection("Users")
      /* .where("doc.id", "!=", idUser) */
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

  const speed = 22;
  let leftSpace = 0;
  let topSpace = 0;

  const handleScorePlayer = async (scorePlayer, iduser) => {
    await fb
      .firestore()
      .collection("Users")
      .doc(iduser)
      .update({
        score: scorePlayer,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error writing coordonates", err);
      });
  };

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

  document.body.onkeydown = function () {
    const myKey = event.keyCode;

    const target = document.getElementById("target");
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
      console.log("je quitte");
      history.push("/");
    }
  };

  function shoot() {
    let bulletPosX = event.x - 32;
    console.log("bulletPosX " + bulletPosX);
    let bulletPosY = event.y - 32;
    console.log("bulletPosY " + bulletPosY);
    let targetPosX = document.getElementById("target").x;
    console.log("targetPosX " + targetPosX);
    let targetPosXEdge = targetPosX + 100;
    console.log("targetPosXEdge " + targetPosXEdge);
    let targetPosY = document.getElementById("target").y;
    console.log("targetPosY " + targetPosY);
    let targetPosYEdge = targetPosY + 100;
    console.log("targetPosYEdge " + targetPosYEdge);

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
    handleScorePlayer(newScore, user.props.id);
  }

  console.log(users);

  return (
    <div id="container">
      {users.map((user) => {
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
            <img id="target" alt="target" src={schwarzy} />
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

      <h1>STAY ALIVE !!</h1>
    </div>
  );
}
