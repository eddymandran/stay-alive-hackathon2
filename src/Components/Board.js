/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import '../Styles/Board.css';

export default function Board() {
  const [scorePlayer, setScorePlayer] = useState(0);
  document.body.onmousemove = function () {
    document.getElementById('scope').style.marginLeft = event.x - 32 + 'px';
    document.getElementById('scope').style.marginTop = event.y - 32 + 'px';
  };

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

  const bulletSound = document.createElement('AUDIO');
  bulletSound.src =
    'http://www.freesound.org/people/RandomationPictures/sounds/138480/download/138480__randomationpictures__bullet-blood-3.wav';

  function shoot() {
    bulletSound.play();
    let bulletPosX = event.x - 32;
    console.log(event.x);
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
      }
      else {
        newScore--;
        setScorePlayer(newScore); 
      }
    } 
  }


  return (
    <div id='container'>
      <img
        src='http://vignette3.wikia.nocookie.net/callofduty/images/7/7c/L96A1_Scope_BO.png/revision/20120119151427'
        id='scope'
        onClick={shoot}
        alt='scope'
      />
      <img
        src='http://www.clker.com/cliparts/v/m/O/4/Z/t/target-board-hi.png'
        id='target'
        alt='target'
      />
      <h1>Shooting Game</h1>
      <p>
        Score: <span id='ScoreCount'>{scorePlayer}</span>
      </p>
    </div>
  );
}
