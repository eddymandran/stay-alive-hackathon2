import React, { useContext, useEffect } from 'react';
import '../Styles/Navbar.css';
import { Howl } from 'howler';
import gagne from '../audio/gagne.mp3';
import pump from '../audio/pump.mp3';
import { GeneralContext } from '../Contexts/GeneralContext';
import { useToasts } from 'react-toast-notifications';
import { firebase } from '../services/firebase';
import { useState } from 'react';
import gun from '../images/gun.png';
import schwarzy from '../images/schwarzy.png';
import obama from '../images/obama.png';
import madonna from '../images/madonna.png';
import einstein from '../images/einstein.png';
import lee from '../images/lee.png';

const fb = firebase;

const audioClips = new Howl({
  src: [gagne],
});
const audioClips1 = new Howl({
  src: [pump],
});

export default function Navbar(props) {
  const { scorePlayer } = useContext(GeneralContext);
  const { addToast } = useToasts();

  function goodPlayer() {
    if (scorePlayer === 5 || scorePlayer === 10) {
      audioClips.play();
      addToast('Vous êtes déchainé !', {
        appearance: 'success',
        autoDismiss: true,
      });
    } else if (scorePlayer === -1 || scorePlayer === -10) {
      audioClips1.play();
      addToast('Vous dormez ??? Debout la dedans !!!', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }

  const [users, setUsers] = useState([]);
  const player = props;

  const onChangePicture = (picture) => {
    switch (picture) {
      case 'schwarzy':
        return schwarzy;
      case 'obama':
        return obama;
      case 'einstein':
        return einstein;
      case 'madonna':
        return madonna;
      case 'lee':
        return lee;
      default:
        return schwarzy;
    }
  };

  useEffect(() => {
    const getUsers = fb
      .firestore()
      .collection('Users')
      .orderBy('name', 'asc')
      .onSnapshot((u) => {
        setUsers(
          u.docs.map((user) => {
            return { id: user.id, ...user.data() };
          })
        );
      });

    return () => getUsers();
  }, []);

  useEffect(() => {
    goodPlayer();
  }, [scorePlayer]);

  return (
    <div className='scoreBar'>
      <div className='zoneAvatar'>
        <button className='buttonBack'>Home</button>
        <img
          src={onChangePicture(player.props.picture)}
          className='avatarImage'
          alt='personnage choisi'
        ></img>
        <h5 className='title5'>NickName : {player.props.name}</h5>
      </div>
      <hr />
      <div className='zoneScore'>
        <h5 className='title5'>
          {' '}
          Your score :<p className='scorePlayer'>{scorePlayer}</p>
        </h5>
        <img src={gun} alt='gun' className='gunImage'></img>
      </div>
      <hr />
      <div className='zoneCharacters'>
        <h5 className='title5'>Fugitive(s)</h5>
        <ul className='charactersList'>
          {users.map((u) => {
            return (
              <li key={u.id}>
                {u.name} : {u.score} pts
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
