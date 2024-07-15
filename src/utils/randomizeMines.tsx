import { CellState } from "../constants/types";

export const randomizeMines = (gameBoard: CellState[][], mines: number) => {
  const rows = gameBoard.length;
  const cols = gameBoard[0].length;

  // 중복되지 않는 set 집합 선언
  let MineSet = new Set<number>();

  while (MineSet.size < mines) {
    let mineIndex = Math.floor(Math.random() * rows * cols);
    MineSet.add(mineIndex);
  }
  //1, 4, 6, 13, 15, 36
  Array.from(MineSet).forEach((mineIndex) => {
    const x = Math.floor(mineIndex / cols);
    const y = Math.floor(mineIndex % cols);

    gameBoard[x][y].hasMine = true;
  });

  return gameBoard;
};
