import React from "react";
import Avatar from './Avatar'
import "../Styles/Board.css"



export default function Board() {

  const dotsContainer = document.getElementById("dots-container");
  console.log("console log"+ dotsContainer)
  let element = document.createElement("div");
  console.log(element)
  element.style.position = "absolute";
  element.style.zIndex = 1000;
  element.style.cursor = "move";

  

  return (
    <div>
      <div id="dots-container"></div>
      <div id="controls-container">
       {/*  <button id="button">+</button> */}
      </div>
    </div>
  );
}
