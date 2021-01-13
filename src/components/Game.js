import React from 'react';
import PlayerBoard from './components/PlayerBoard';
import BattleBoard from './components/BattleBoard';
import Score

function Game() {
  return (
    <div className='Game'>
      <PlayerBoard />
      <BattleBoard />
    </div>
  );
}

export default Game;
