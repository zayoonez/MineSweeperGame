import styled from "styled-components";
import { CellState } from "../constants/types";
import { countNeighborMines } from "../utils/countNeighborMines";
import { flagCell } from "../redux/slice/gameSlice";
import { useDispatch } from "react-redux";

interface CellProps {
  cellState: CellState;
  onClick: () => void;
  // board: CellState[][];
  rowIndex: number;
  colIndex: number;
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
  const dispatch = useDispatch();
  // console.log(props.cellState);
  if (props.cellState.hasMine === true) {
    console.log(props.cellState.hasMine);
  }
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 동작 방지
    dispatch(flagCell({ x: props.colIndex, y: props.rowIndex }));
    console.log(props.rowIndex, props.colIndex);
  };

  return (
    <CellContainer
      onClick={props.onClick}
      onContextMenu={(e) => handleRightClick(e)}
    >
      {props.cellState.isOpened
        ? props.cellState.hasMine
          ? "💣"
          : props.cellState.neighborBombs
        : props.cellState.isFlagged
        ? "🚩"
        : ""}
    </CellContainer>
  );
}
export default Cell;
