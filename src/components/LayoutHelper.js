export const BOARD_ROWS = 10;
export const BOARD_COLUMNS = 10;
export const BOARD = BOARD_COLUMNS * BOARD_ROWS;

export const SQUARE_STATE = {
  empty: 'empty',
  avatar: 'avatar',
  hit: 'hit',
  miss: 'miss',
  avatar_hit: 'avatar_hit',
  forbidden: 'forbidden',
  awaiting: 'awaiting',
};

export const generateEmptyLayout = () => {
  return new Array(BOARD_ROWS * BOARD_COLUMNS).fill(SQUARE_STATE.empty);
};
