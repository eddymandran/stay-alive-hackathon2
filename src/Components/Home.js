import React, { useState } from 'react';
import '../Styles/Home.css';

export default function Home() {
  const [notChosen, setNotChosen] = useState(false);
  const handleChosen = () => {
    setNotChosen(!notChosen);
  };
  return (
    <div className='home'>
      <h1 className='titleHome'>
        <span className='titleHome1'>Stay </span>Alive !
      </h1>
      <p className='chooseAvatarStyle'>Choose your avatar</p>
      <div className='chooseAvatarImgs'>
        <div
          className={notChosen ? 'AvatarsLook1' : 'AvatarsLook1C'}
          onClick={handleChosen}
        ></div>
        <div className='AvatarsLook2' onClick={handleChosen}></div>
        <div className='AvatarsLook3' onClick={handleChosen}></div>
        <div className='AvatarsLook4' onClick={handleChosen}></div>
        <div className='AvatarsLook5' onClick={handleChosen}></div>
      </div>
      <form className='formLogin'>
        <label for='name' className='texteLabel'>
          Pseudo
        </label>
        <input type='text' name='name' className='pseudoInput'></input>
        <button type='submit' className='buttonHome'>
          Rejoindre
        </button>
      </form>
    </div>
  );
}
