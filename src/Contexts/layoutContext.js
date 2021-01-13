import React, { createContext, useState } from 'react';

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {

const BOARD_ROWS = 10;
const BOARD_COLUMNS = 10;
const BOARD = BOARD_COLUMNS * BOARD_ROWS;

const SQUARE_STATE = {
    empty: 'empty',
    avatar: 'avatar',
    hit: 'hit',
    miss: 'miss',
    avatar_hit: 'avatar_hit',
    forbidden: 'forbidden',
    awaiting: 'awaiting',
};

const generateEmptyLayout = () => {
    return new Array(BOARD_ROWS * BOARD_COLUMNS).fill(SQUARE_STATE.empty);
};
  return (
    <LayoutContext.Provider
      value={{ BOARD,SQUARE_STATE ,generateEmptyLayout }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutContextProvider;