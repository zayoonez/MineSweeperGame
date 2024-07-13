import styled from "styled-components";
import Cell from "./Cell";
import { CellState } from "../constants/types";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Container = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
`;

function GameBoard() {
  const rows = useSelector((state: RootState) => state.game.rows);
  const cols = useSelector((state: RootState) => state.game.cols);
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
