import styled from "styled-components";
import Menu from "./components/Menu";
import DisplayBoard from "./components/DisplayBoard";
import GameBoard from "./components/GameBoard";

const GameContainer = styled.div`
  background-color: silver;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 30px;
  box-shadow: 1px 3px 5px 1px #9c9c9c;
`;
const Boards = styled.div`
  /* width: 90%; */
  background-color: silver;
`;

function App() {
  return (
    <GameContainer>
      <Menu />
      <Boards>
        <DisplayBoard />
        <GameBoard />
      </Boards>
    </GameContainer>
  );
}

export default App;
