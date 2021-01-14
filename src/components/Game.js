import React from 'react';
import PlayerBoard from './PlayerBoard';
import BattleBoard from './BattleBoard';
import Score from'./Score';

function Game() {
  return (
    <div className='Game'>
      <PlayerBoard />
      <BattleBoard />
      <Score/>
    </div>
  );
}

export default Game;
