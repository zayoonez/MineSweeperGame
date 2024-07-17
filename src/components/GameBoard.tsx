import styled from "styled-components";
import Cell from "./Cell";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { randomizeMines } from "../utils/randomizeMines";
import { startGame, openCell, setGameStatus } from "../redux/slice/gameSlice";

const Container = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
`;

function GameBoard() {
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.game.rows);
  const cols = useSelector((state: RootState) => state.game.cols);
  const mines = useSelector((state: RootState) => state.game.mines);
  const gameBoard = useSelector((state: RootState) => state.game.board);
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);

  const [firstClick, setFirstClick] = useState(true);
  // 새로운 게임보드 입력시 firstclick 도 초기화
  useEffect(() => {
    if (gameStatus === "Ready") {
      setFirstClick(true);
    }
  }, [gameBoard]);

  const handleCellClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      console.log(rowIndex, colIndex);

      if (firstClick) {
        console.log("겜시작");
        const startedGameboard = randomizeMines(
          gameBoard,
          mines,
          colIndex,
          rowIndex
        );
        setFirstClick(false);

        dispatch(startGame(startedGameboard));

        dispatch(setGameStatus("Playing"));
      }
      dispatch(openCell({ x: colIndex, y: rowIndex }));
    },
    [firstClick, rows, cols, mines]
  );

  return (
    <Container rows={rows} cols={cols}>
      {gameBoard.map((row, rowIndex) =>
        row.map((cellState, colIndex) => (
          <Cell
            key={`${rowIndex}, ${colIndex}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            rowIndex={rowIndex}
            colIndex={colIndex}
          ></Cell>
        ))
      )}
    </Container>
  );
}

export default GameBoard;
