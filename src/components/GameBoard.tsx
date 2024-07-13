import styled from "styled-components";
import Cell from "./Cell";
import { CellState } from "../constants/types";

interface GameBoardProps {
  rows: number;
  cols: number;
}

const Container = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;

function GameBoard({ rows, cols }: GameBoardProps) {
  const totalCells = rows * cols;
  const initialCellState: CellState = {
    isOpened: false,
    isFlagged: false,
    hasMine: false,
    neighborBombs: 0,
  };
  const cells = Array.from({ length: totalCells }, () => initialCellState);

  return (
    <Container rows={rows} cols={cols}>
      {cells.map((cellState, index) => (
        <Cell cellState={cellState} key={index}></Cell>
      ))}
    </Container>
  );
}

export default GameBoard;
