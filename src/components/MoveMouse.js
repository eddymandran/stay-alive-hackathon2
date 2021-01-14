import React, { useState } from 'react';
import '../style/moveMouse.css';

const useMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
    console.log(e.clientX, e.clientY);
  };
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  };
};

const Hook = () => {
  const { x, y, handleMouseMove } = useMove();

  const getCoordonates = (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
  };
  return (
    <div className='mouseArea' onMouseMove={handleMouseMove}>
      Hook
      <div className='mouseInfo' onClick={(e) => getCoordonates(e)}>
        The current mouse position is ({x}, {y})
      </div>
    </div>
  );
};

export default Hook;
