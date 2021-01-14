import React from 'react';
import '../Styles/Home.css';
import { firebase } from '../services/firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const fb = firebase;

export default function Home() {
  const [chosen, setChosen] = useState(0);
  const handleChosen1 = (e) => {
    setChosen(1);
    if (e.target.className === 'AvatarsLook1Active') {
      setChosen();
    }
  };
  const handleChosen2 = (e) => {
    setChosen(2);
    if (e.target.className === 'AvatarsLook2Active') {
      setChosen();
    }
  };
  const handleChosen3 = (e) => {
    setChosen(3);
    if (e.target.className === 'AvatarsLook3Active') {
      setChosen();
    }
  };
  const handleChosen4 = (e) => {
    setChosen(4);
    if (e.target.className === 'AvatarsLook4Active') {
      setChosen();
    }
  };
  const handleChosen5 = (e) => {
    setChosen(5);
    if (e.target.className === 'AvatarsLook5Active') {
      setChosen();
    }
  };
  const [pseudo, setPseudo] = useState('');
  const [isSetUser, setIsSetUser] = useState(false);
  const [idUser, setIdUser] = useState('');

  const [chosenPicturePath, setChosenPicturePath] = useState('schwarzy.png');

  const createUser = (event) => {
    event.preventDefault();
    fb.firestore()
      .collection('Users')
      .add({
        name: pseudo,
        picture: chosenPicturePath,
        x: 0,
        y: 0,
        score: 0,
      })
      .then(function (res) {
        // console.log("Document successfully written!", res.id);
        setIsSetUser(!isSetUser);
        setIdUser(res.id);
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };

  return (
    <div className='home'>
      <h1 className='titleHome'>
        <span className='titleHome1'>Stay </span>Alive !
      </h1>
      <p className='chooseAvatarStyle'>Choose your avatar</p>
      <div className='chooseAvatarImgs'>
        <div
          onClick={handleChosen1}
          className={chosen === 1 ? 'AvatarsLook1Active' : 'AvatarsLook1'}
        ></div>
        <div
          onClick={handleChosen2}
          className={chosen === 2 ? 'AvatarsLook2Active' : 'AvatarsLook2'}
        ></div>
        <div
          onClick={handleChosen3}
          className={chosen === 3 ? 'AvatarsLook3Active' : 'AvatarsLook3'}
        ></div>
        <div
          onClick={handleChosen4}
          className={chosen === 4 ? 'AvatarsLook4Active' : 'AvatarsLook4'}
        ></div>
        <div
          onClick={handleChosen5}
          className={chosen === 5 ? 'AvatarsLook5Active' : 'AvatarsLook5'}
        ></div>
      </div>
      <form className='formLogin' onSubmit={createUser}>
        <label for='name' className='texteLabel'>
          Pseudo
        </label>
        <input
          type='text'
          name='name'
          className='pseudoInput'
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        ></input>

        {!isSetUser ? (
          <button type='submit' className='buttonHome'>
            Rejoindre
          </button>
        ) : (
          <Link to={`ChooseMap/${idUser}`}>
            <input type='button' value='GO' className='buttonHome' />
          </Link>
        )}
      </form>
    </div>
  );
}
