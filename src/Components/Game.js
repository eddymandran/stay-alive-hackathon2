import React from "react";
import Navbar from "./Navbar";
import "../Styles/Game.css";
import { useState } from "react";

export default function Game() {
  const [users, setUsers] = useState([]);
  const [pseudo] = useState("");

  return (
    <div className="gameBody">
      <Navbar props={(users, setUsers, pseudo)} />
    </div>
  );
}
