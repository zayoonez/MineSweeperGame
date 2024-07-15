import { CellState } from "../constants/types";

const initialCellState: CellState = {
  isOpened: false,
  isFlagged: false,
  hasMine: false,
  neighborBombs: 0,
};
// 이차원 배열의 GameBoard 생성
export const createBoard = (rows: number, cols: number): CellState[][] => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ ...initialCellState }))
  );
};
