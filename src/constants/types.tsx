export type CellState = {
  isOpened: boolean; // 폭탄이 아닌 것 중 클릭된 것
  isFlagged: boolean; //
  hasMine: boolean;
  neighborBombs: number;
};
