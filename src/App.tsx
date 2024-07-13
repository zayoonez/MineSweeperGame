import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu";

const GameContainer = styled.div`
  // 난이도에 따라
  background-color: silver;
  border-radius: 20px;
`;

const DisplayBoard = styled.div`
  /* width: 200px; */
`;
const GameBoard = styled.div`
  width: 200px;
  height: 260px;
`;

function App() {
  return (
    <GameContainer>
      <Menu />
      <DisplayBoard></DisplayBoard>
      <GameBoard></GameBoard>
    </GameContainer>
  );
}

export default App;
