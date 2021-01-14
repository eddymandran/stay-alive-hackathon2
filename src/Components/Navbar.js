import React from 'react';
import '../Styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='scoreBar'>
      <div className='zoneAvatar'>
        <img alt='personnage choisi'></img>
        <h5 className='title5'>Pseudo</h5>
      </div>
      <hr />
      <div className='zoneScore'>
        <h5 className='title5'>Score</h5>
        <img alt='schtroumph'></img>
      </div>
      <hr />
      <div className='zoneCharacters'>
        <h5 className='title5'>Personnages connectés</h5>
        <ul className='charactersList'>
          <li>Perso 1</li>
          <li>Perso 2</li>
          <li>Perso 3</li>
          <li>Perso 4</li>
          <li>Perso 5</li>
        </ul>
      </div>
    </div>
  );
}
