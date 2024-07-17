import styled from "styled-components";
import Menu from "./components/Menu";
import DisplayBoard from "./components/DisplayBoard";
import GameBoard from "./components/GameBoard";

const GameContainer = styled.div`
  background-color: silver;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;
const Boards = styled.div`
  width: 90%;
  border: 3px solid white;
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
