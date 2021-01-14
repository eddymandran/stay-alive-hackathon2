import React from 'react';
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <h1 className='titleHome'>
        <span className='titleHome1'>Stay </span>Alive !
      </h1>
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
