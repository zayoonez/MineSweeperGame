import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;
function GameBoard() {
  return <Container></Container>;
}
export default GameBoard;
