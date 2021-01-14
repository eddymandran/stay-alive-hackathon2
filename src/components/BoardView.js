import React from 'react';

function BoardView(props) {
  const { image, alt } = props;
  return <img className='theBoardimg' src={image} alt={alt} />;
}

export default BoardView;
