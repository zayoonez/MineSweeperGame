import { CellState, DIRECTIONS } from "../constants/types";

// 이차원 배열의 GameBoard 생성
export const countNeighborMines = (
  board: CellState[][],
  x: number,
  y: number
) => {
  const height = board.length;
  const width = board[0].length;

  let mineNum = 0;

  DIRECTIONS.forEach((direction: [number, number]) => {
    const [dx, dy] = direction;
    const neighborX = x + dx;
    const neighborY = y + dy;

    if (
      neighborX >= 0 &&
      neighborX < width &&
      neighborY >= 0 &&
      neighborY < height &&
      board[neighborX][neighborY].hasMine
    ) {
      mineNum++;
    }
  });

  return mineNum;
};
