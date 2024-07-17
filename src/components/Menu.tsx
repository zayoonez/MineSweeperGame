import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDifficulty,
  setGameStatus,
  startGame,
} from "../redux/slice/gameSlice";
import Modal from "./Modal/CustomModal";
import { RootState } from "../redux/store";
import { createBoard } from "../utils/createBoard";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: 600;
  justify-content: space-between;
  height: 35px;
  position: relative;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 45px;
  height: 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  &:active {
    box-shadow: 1px 1px 3px 1px #8c8c8c inset;
  }
`;

const MenuContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  /* top: -20px; */
  left: -10px;
  bottom: -135px;
  z-index: 50;
  font-weight: 400;
  background-color: #f9f9f9;

  div {
    display: block;
    text-decoration: none;
    color: rgb(37, 37, 37);
    font-size: 12px;
    padding: 10px 10px;

    &:hover {
      background-color: #ececec;
    }
  }
`;
const NewButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 45px;
  height: 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  &:active {
    box-shadow: 1px 1px 3px 1px #8c8c8c inset;
  }
`;
const DifficultyList = ["Beginner", "Intermediate", "Expert"] as const;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.game.rows);
  const cols = useSelector((state: RootState) => state.game.cols);
  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleDifficulty = (
    difficulty: (typeof DifficultyList)[number] // "Beginner" , "Intermediate" , "Expert"
  ) => {
    dispatch(setDifficulty(difficulty));
    dispatch(setGameStatus("Ready"));
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };

  const handleNewGame = () => {
    setIsOpen(false);
    dispatch(setGameStatus("Ready"));
    const newBoard = createBoard(rows, cols);
    dispatch(startGame(newBoard));
  };

  return (
    <MenuContainer>
      {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : null}

      <MenuButton onClick={handleClickMenu}>Game</MenuButton>
      <MenuContent isOpen={isOpen}>
        {DifficultyList.map((d) => (
          <div key={d} onClick={() => handleDifficulty(d)}>
            {d}
          </div>
        ))}
        <div onClick={handleModalOpen}>Custom</div>
      </MenuContent>

      <NewButton onClick={handleNewGame}>NEW</NewButton>
    </MenuContainer>
  );
}
export default Menu;
