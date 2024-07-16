import styled from "styled-components";
import { CellState } from "../constants/types";
import { getNeighborMines } from "../utils/countNeighborMines";

interface CellProps {
  cellState: CellState;
  onClick: () => void;
  board: CellState[][];
  x: number;
  y: number;
}
const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 20px;
  height: 20px;
`;
function Cell(props: CellProps) {
  // console.log(props.cellState);
  if (props.cellState.hasMine === true) {
    console.log(props.cellState.hasMine);
  }

  return (
    <CellContainer onClick={props.onClick}>
      {props.cellState.hasMine ? "💣" : ""}
      {getNeighborMines(props.board, props.x, props.y)}
    </CellContainer>
  );
}
export default Cell;
