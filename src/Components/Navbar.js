import React, { useContext, useEffect } from 'react';
import '../Styles/Navbar.css';
import { Howl } from 'howler';
import gagne from '../audio/gagne.mp3';
import pump from '../audio/pump.mp3';
import { GeneralContext } from '../Contexts/GeneralContext';
import { useToasts } from 'react-toast-notifications';

const audioClips = new Howl({
  src: [gagne],
});
const audioClips1 = new Howl({
  src: [pump],
});

export default function Navbar() {
  const { scorePlayer } = useContext(GeneralContext);
  const { addToast } = useToasts();

  function goodPlayer() {
    if (scorePlayer === 10 || scorePlayer === 20) {
      audioClips.play();
      addToast('Vous êtes déchainé !', {
        appearance: 'success',
        autoDismiss: true,
      });
    } else if (scorePlayer < 0) {
      audioClips1.play();
      addToast('Vous dormez ??? Debout la dedans !!!', {
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
        <h5 className='title5'>NickName :</h5>
      </div>
      <hr />
      <div className='zoneScore'>
        <h5 className='title5'> Your score :<p>{scorePlayer}</p></h5>
        <img alt='schtroumph'></img>
      </div>
      <hr />
      <div className='zoneCharacters'>
        <h5 className='title5'>Fugitive(s)</h5>
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
