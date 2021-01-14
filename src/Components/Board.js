import React from "react";
import "../Styles/Board.css";

export default function Board() {
  const backgroundSound = new Audio(
    "https://freespecialeffects.co.uk/soundfx/scifi/electronicheart.wav"
  );
  backgroundSound.loop = true;
  const expAudio = new Audio(
    "https://freespecialeffects.co.uk/soundfx/explosions/explosion_18.wav"
  );
  expAudio.volume = 0.2;

  const exp = document.getElementById("exp");
  const btn = document.getElementById("btn");
  const zombie = document.getElementById("zombie");
  console.log(zombie)
  const progress = document.getElementById("progress-bar-active");
  const txt = document.getElementById("txt");
  const audioBtn = document.getElementById("audioBtn");
  const mute = document.getElementById("mute");

  let run;
  let y;
  let num;

  function startGame() {
    num = 5;
    zombie.style.display = "inherit";
    zombie.src =
      "https://dejpknyizje2n.cloudfront.net/marketplace/products/cartoon-cross-eyed-zombie-head-sticker-1541446163.0430074.png";
    btn.style.display = "none";
    txt.style.display = "none";
    progress.style.width = 50 + "%";
    run = setInterval(runIt, 50);
    position();
  }

  function runIt() {
    let y = zombie.offsetTop - 10;
    if (num < 10) {
      if (y > -100) {
        y--;
        zombie.style.top = y + "px";
      } else {
        position();
        num++;
        progress.style.width = num * 10 + "%";
      }

      if (mute.checked) {
        backgroundSound.pause();
        audioBtn.src =
          "https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-shadow-style-2/256/Sound-off.png";
      } else {
        backgroundSound.play();
        audioBtn.src =
          "https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-shadow-style-2/256/Sound-on.png";
      }
    } else {
      clearInterval(run);
      backgroundSound.pause();
      zombie.style.display = "none";
      progress.style.width = 100 + "%";
      setTimeout(() => {
        txt.style.display = "inherit";
        txt.innerHTML = "YOU LOSE!<br>Now the whole world will die!";
        btn.style.display = "inherit";
        btn.innerHTML = "play again?";
      }, 1200);
    }
  }

  function hit(idx) {
    const elem = document.getElementById(idx);
    const y = elem.offsetTop;

    num--;

    const left = elem.offsetLeft;

    exp.style.left = left + "px";
    exp.style.top = y + "px";
    exp.style.display = "inherit";

    setInterval(function () {
      exp.style.display = "none";
    }, 1200);

    if (num === 0) {
      clearInterval(run);
      zombie.style.display = "none";
      progress.style.width = 0 + "%";
      backgroundSound.pause();
      setTimeout(() => {
        btn.style.display = "inherit";
        btn.innerHTML = "play again?";
        txt.style.display = "inherit";
        txt.innerHTML = "YOU WIN!<br>World thanks you!";
      }, 1200);
    } else {
      position();
      progress.style.width = num * 10 + "%";
    }

    expAudio.play();

    if (mute.checked) {
      expAudio.pause();
      audioBtn.src =
        "https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-shadow-style-2/256/Sound-off.png";
    } else {
      expAudio.play();
      audioBtn.src =
        "https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-shadow-style-2/256/Sound-on.png";
    }
  }

  function position() {
    var x = Math.floor(Math.random() * 85);
    zombie.style.left = x + "%";
    y = 420;
    zombie.style.top = y + "px";
  }

  function checkedM() {
    if (mute.checked) {
      backgroundSound.pause();
      expAudio.pause();
      audioBtn.src =
        "https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-shadow-style-2/256/Sound-off.png";
    } else {
      audioBtn.src =
        "https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-shadow-style-2/256/Sound-on.png";
    }
  }

  return (
    <div>
      <div id="header">
        Shoot your friends!!!
      </div>
      <div id="rules">Rules: shoot at least 5 friends!</div>

      <label id="nosound">
        <input type="checkbox" id="mute" onclick={checkedM}></input>
        <img
          id="audioBtn"
          src="https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-shadow-style-2/256/Sound-on.png"
          title="ON/OFF"
          alt="button"
        />
      </label>

      <div class="game-window">
        <div id="txt"></div>
        <button id="btn" onclick={startGame()}>
          Play game
        </button>
        <img onclick={hit(this.id)} id="zombie" alt="zombie"/>
        <img
          id="exp"
          src="https://purepng.com/public/uploads/large/purepng.com-explosion-pngnaturestylenaturalbeautifulgreen-541521126124xxi20.png"
          alt="explosion"
        />
      </div>
      <div id="progress-bar">
        <div id="progress-bar-active"></div>
      </div>
    </div>
  );
}
