import styled from "styled-components";
import { CellState } from "../constants/types";
import { countNeighborMines } from "../utils/countNeighborMines";
import { flagCell } from "../redux/slice/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface CellProps {
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
  const cellState: CellState = useSelector(
    (state: RootState) => state.game.board[props.rowIndex][props.colIndex]
  );
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
      {cellState.isOpened
        ? cellState.hasMine
          ? "💣"
          : cellState.neighborBombs
        : cellState.isFlagged
        ? "🚩"
        : ""}
    </CellContainer>
  );
}
export default Cell;
