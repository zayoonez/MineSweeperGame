import { countNeighborMines } from "./countNeighborMines";
import { DIRECTIONS } from "../constants/types";

// 재귀적으로 cell의 neighborbombs가 0인지 확인하는 함수

export const openEmptyCells = (board: any[][], x: number, y: number) => {
  const open = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= board[0].length || y >= board.length) {
      return;
    }

    const cell = board[x][y];
    if (cell.isOpened || cell.isFlagged || cell.hasMine) {
      return;
    }
    cell.isOpened = true;

    cell.neighborBombs = countNeighborMines(board, x, y);

    if (cell.neighborBombs === 0) {
      for (const [dx, dy] of DIRECTIONS) {
        open(x + dx, y + dy);
      }
    }
  };
  // 초기 호출
  open(x, y);
};
