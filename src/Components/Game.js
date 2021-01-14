import React from 'react';
import Navbar from './Navbar';
import '../Styles/Game.css';
import '../Styles/Board.css';
import Board from './Board';

export default function Game() {
  return (
    <div className='gameBody'>
      <Navbar />
      <Board />
    </div>
  );
}
