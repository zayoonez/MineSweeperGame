import { CellState } from "../constants/types";

export const randomizeMines = (gameBoard: CellState[][], mines: number) => {
  const rows = gameBoard.length;
  const cols = gameBoard[0].length;

  // 중복되지 않는 set 집합 선언
  let MineSet = new Set<number>();

  const newBoard = gameBoard.map((row) =>
    row.map((cell) => ({
      ...cell,
      hasMine: false, // 모든 셀의 hasMine을 초기화
    }))
  );

  while (MineSet.size < mines) {
    let mineIndex = Math.floor(Math.random() * rows * cols);
    MineSet.add(mineIndex);
  }
  //1, 4, 6, 13, 15, 36
  Array.from(MineSet).forEach((mineIndex) => {
    const x = Math.floor(mineIndex / cols);
    const y = Math.floor(mineIndex % cols);

    newBoard[x][y].hasMine = true; // 복사본의 hasMine을 true로 설정
  });
  console.log(newBoard);

  return newBoard;
};
