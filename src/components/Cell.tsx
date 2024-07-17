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
const CellContainer = styled.div<{
  isLose: boolean;
  isLastClicked: boolean;
  isOpened: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isLose, isLastClicked, isOpened }) =>
    isLose && isLastClicked && isOpened
      ? "red"
      : isOpened
      ? "#c3c3c3"
      : "#ededed"};
  border: 1px solid #ccc;
  font-size: 14px;
  width: 20px;
  height: 20px;
  // 입체감을 위한 스타일
  box-shadow: ${({ isOpened }) =>
    isOpened
      ? "1px 1px 3px 1px #8c8c8c inset"
      : "2px 2px 5px rgba(0, 0, 0, 0.5)"};

  &:active {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
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
      isOpened={cellState.isOpened}
    >
      {cellState.isOpened
        ? cellState.hasMine
          ? "💣"
          : cellState.neighborBombs === 0
          ? ""
          : cellState.neighborBombs
        : cellState.isFlagged
        ? "🚩"
        : ""}
    </CellContainer>
  );
}
export default Cell;
