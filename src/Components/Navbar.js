import React, { useContext, useEffect } from 'react';
import '../Styles/Navbar.css';
import { GeneralContext } from '../Contexts/GeneralContext';
import { useToasts } from 'react-toast-notifications';


export default function Navbar() {
  const { scorePlayer } = useContext(GeneralContext);
  const { addToast } = useToasts();

  function goodPlayer() {
    if (scorePlayer === 10 || scorePlayer === 15 || scorePlayer === 20 ) {
      addToast('Vous êtes déchainé !', {
        appearance: 'success',
        autoDismiss: true,
      });
    } else if (scorePlayer < 0) {
      addToast("Vous dormez ??? Debout la dedans !!!", {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }
  useEffect(() => {
    goodPlayer();
  }, [scorePlayer]);

  return (
    <div className='scoreBar'>
      <div className='zoneAvatar'>
        <img alt='personnage choisi'></img>
        <h5 className='title5'>Pseudo</h5>
      </div>
      <hr />
      <div className='zoneScore'>
        <h5 className='title5'>{scorePlayer}</h5>
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
