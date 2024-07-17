import styled from "styled-components";
import { CellState } from "../constants/types";
import { flagCell } from "../redux/slice/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface CellProps {
  onClick: () => void;
  // board: CellState[][];
  rowIndex: number;
  colIndex: number;
}
const CellContainer = styled.div<{ isLose: boolean; isLastClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isLose, isLastClicked }) =>
    isLose && isLastClicked ? "red" : "white"};
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
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  const lastClickedCell = useSelector(
    (state: RootState) => state.game.lastClickedCell
  );
  const isLastClicked = lastClickedCell
    ? lastClickedCell.x === props.rowIndex &&
      lastClickedCell.y === props.colIndex
    : false;
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 동작 방지
    dispatch(flagCell({ x: props.colIndex, y: props.rowIndex }));
    console.log(props.rowIndex, props.colIndex);
  };
  const handleClick = () => {
    props.onClick();
  };

  return (
    <CellContainer
      onClick={handleClick}
      onContextMenu={(e) => handleRightClick(e)}
      isLose={gameStatus === "Lose"}
      isLastClicked={isLastClicked}
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
