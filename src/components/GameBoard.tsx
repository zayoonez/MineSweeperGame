import styled from "styled-components";
import Cell from "./Cell";
import { CellState } from "../constants/types";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { createBoard } from "../utils/createBoard";
import { randomizeMines } from "../utils/randomizeMines";
import { startGame, openCell } from "../redux/slice/gameSlice";
import { countNeighborMines } from "../utils/countNeighborMines";

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
  const [firstClick, setFirstClick] = useState(true);

  const handleCellClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      console.log(rowIndex, colIndex);

      if (firstClick) {
        console.log("겜시작");
        let gameboard = createBoard(rows, cols);

        const startedGameboard = randomizeMines(
          gameboard,
          mines,
          colIndex,
          rowIndex
        );
        dispatch(startGame(startedGameboard));
        setFirstClick(false);
      }
      dispatch(openCell({ x: colIndex, y: rowIndex }));
    },
    [firstClick, rows, cols]
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
