import styled from "styled-components";
import { CellState } from "../constants/types";

interface CellProps {
  cellState: CellState;
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
function Cell({ cellState }: CellProps) {
  console.log(cellState);

  return <CellContainer></CellContainer>;
}
export default Cell;
